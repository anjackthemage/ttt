var http = require("http");
var url = require("url");

function startServer(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
        // DEBUG START
		console.log("Request received: " + pathname);
		console.log("Request " + request.method + ": " + pathname + ".\nHeaders:\n", request.headers, "\nTrailers:\n", request.trailers);
		// DEBUG END
        
        if (request.method = 'GET') {
            route(pathname, response);
        };
		
	}

	http.createServer(onRequest).listen(8080);
    // DEBUG START
	console.log("HTTP server running.");
    // DEBUG END
}

function sendResponse(response, text, code) {
    // DEBUG START
    //console.log("Sending response.")
    // DEBUG END
	response.writeHead(code, {"Content-Type": "text/html"});
	response.write(text);
	response.end();
}

exports.startServer = startServer;
exports.sendResponse = sendResponse;