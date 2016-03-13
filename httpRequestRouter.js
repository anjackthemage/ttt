var httpServer = require("./httpServer");

function routeRequest(pathname, response) {
	// DEBUG START
	console.log("Routing request to: " + pathname)
	// DEBUG END
	if (typeof routeHandler[pathname] === 'function') {
        routeHandler[pathname](response);
    }
    else {
        console.log("Page " + pathname + " not found.");
        httpServer.sendResponse(response, "Error 404: Page not found, man.", 404);
    }
}

exports.routeRequest = routeRequest;

var routeHandler = [];

routeHandler["/"] = function (response) {
    httpServer.sendResponse(response, "Portal Page", 404);
}

routeHandler["/monitor"] = function (response) {
    httpServer.sendResponse(response, "Public View", 404);
}

routeHandler["/moderator"] = function (response) {
    httpServer.sendResponse(response, "DM View", 404);
}

routeHandler["/player"] = function (response) {
    httpServer.sendResponse(response, "Player View", 404);
}