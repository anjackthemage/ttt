var httpServer = require("./httpServer");

function routeRequest(pathname, response) {
	// DEBUG START
	console.log("Routing request to: " + pathname)
	// DEBUG END
	
	httpServer.sendResponse(response);
}

exports.routeRequest = routeRequest;