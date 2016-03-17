var httpServer = require("./httpServer");
var dbConnector = require("./dbConnector");

var error = null;

function routeRequest(path_name, response) {
	// DEBUG START
	console.log("Routing request to: " + path_name)
	// DEBUG END
	if (typeof route_handler[path_name] === 'function') {
        route_handler[path_name](response);
    }
    else {
        // DEBUG START
        console.log("Page " + path_name + " not found.");
        // DEBUG END
        httpServer.sendResponse(error, response, "<h3>Error 404: Dave's not here, man.<\h3>", 404);
    }
}

exports.routeRequest = routeRequest;

var route_handler = [];

route_handler["/"] = function (response) {
    var content = "<h1>Portal Page<\h1>";
    httpServer.sendResponse(error, response, content, 200);
}

route_handler["/monitor"] = function (response) {
	dbConnector.getOrderedCharList(response, httpServer.sendResponse);
    // var content = "<h1>Public View<\h1>";
    // httpServer.sendResponse(response, content, 200);
}

route_handler["/moderator"] = function (response) {
    var content = "<h1>Moderator View<\h1>";
    httpServer.sendResponse(error, response, content, 200);
}

route_handler["/player"] = function (response) {
    var content = "<h1>Player View<\h1>";
    httpServer.sendResponse(error, response, content, 200);
}