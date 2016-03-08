var httpServer = require("./httpServer");
var httpRequestRouter = require("./httpRequestRouter");

httpServer.startServer(httpRequestRouter.routeRequest);