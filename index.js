var httpServer = require("./httpServer");
var httpRequestRouter = require("./httpRequestRouter");

var stdin = process.openStdin();

stdin.addListener("data", function(input) {
	txt = input.toString().trim();
	if(txt.search(/q|quit|exit/i) > -1) {
		console.log(txt.toUpperCase() + " command entered. Quitting...");
		process.exit();
	}
});

httpServer.startServer(httpRequestRouter.routeRequest);