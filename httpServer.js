var http = require("http");
var url = require("url");

function startServer(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request received: " + pathname);
		// DEBUG START
		console.log("Request " + request.method + ": " + pathname + ".\nHeaders:\n", request.headers, "\nTrailers:\n", request.trailers);
		// DEBUG END
        
        if (request.method = 'GET') {
            route(pathname, response);
        };
		
	}

	http.createServer(onRequest).listen(8080);
	console.log("HTTP server running.");
}

function sendResponse(response, text, code) {
    console.log("Sending response.")
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write(text);
	response.end();
}

exports.startServer = startServer;
exports.sendResponse = sendResponse;