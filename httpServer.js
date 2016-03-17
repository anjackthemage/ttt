var http = require("http");
var url = require("url");

function startServer(route) {
	function onRequest(request, response) {
		var path_name = url.parse(request.url).pathname;
        // DEBUG START
		console.log("Request received: " + path_name);
		console.log("Request " + request.method + ": " + path_name + ".\nHeaders:\n", request.headers, "\nTrailers:\n", request.trailers);
		// DEBUG END
        
        if (request.method = 'GET') {
            route(path_name, response);
        };
		
	}

	http.createServer(onRequest).listen(8080);
    // DEBUG START
	console.log("HTTP server running.");
    // DEBUG END
}

function sendResponse(error, response, content, code) {
    // DEBUG START
    //console.log("Sending response.")
    // DEBUG END
	response.writeHead(code, {"Content-Type": "text/html"});
	response.write(content);
	response.end();
}

exports.startServer = startServer;
exports.sendResponse = sendResponse;