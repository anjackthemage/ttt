var http = require("http");
var url = require("url");

function startServer() {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		// DEBUG START
		console.log("Request " + request.method + ": " + pathname + ".\nHeaders:\n", request.headers, "\nTrailers:\n", request.trailers);
		// DEBUG END
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello world!");
		response.end();
	}

	http.createServer(onRequest).listen(8080);
}

exports.startServer = startServer;
console.log("HTTP server running.");