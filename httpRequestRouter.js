var httpServer = require("./httpServer");

function routeRequest(pathname, response) {
	// DEBUG START
	console.log("Routing request to: " + pathname)
	// DEBUG END
	if (typeof routeHandler[pathname] === 'function') {
        routeHandler[pathname](response);
    }
    else {
        // DEBUG START
        console.log("Page " + pathname + " not found.");
        // DEBUG END
        httpServer.sendResponse(response, "<h3>Error 404: Dave's not here, man.<\h3>", 404);
    }
}

exports.routeRequest = routeRequest;

var routeHandler = [];

routeHandler["/"] = function (response) {
    var content = "<h1>Portal Page<\h1>";
    httpServer.sendResponse(response, content, 404);
}

routeHandler["/monitor"] = function (response) {
    var content = "<h1>Public View<\h1>";
    httpServer.sendResponse(response, content, 404);
}

routeHandler["/moderator"] = function (response) {
    var content = "<h1>Moderator View<\h1>";
    httpServer.sendResponse(response, content, 404);
}

routeHandler["/player"] = function (response) {
    var content = "<h1>Player View<\h1>";
    httpServer.sendResponse(response, content, 404);
}