var monitor = require('./monitor');
var taffy = require('taffy');

// Define the "database"
var characters = taffy([{
	name: "Bob", init: 13, stat1name: "Dex", stat1value: 16
},
{
	name: "Tom", init: 22, stat1name: "Dex", stat1value: 20
},
{
	name: "Richard", init: 3, stat1name: "Dex", stat1value: 10
}]);

function getOrderedCharList(response, callback) {
	monitor.convertListToHTML(response, callback, characters().get());
}

exports.getOrderedCharList = getOrderedCharList;