var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("tttDB");
var htmlFormatter = require('./htmlFormatter');

function getOrderedCharList(response, callback) {
	function sendListForProcessing(error, rows) {
		htmlFormatter.convertListToHTML(response, callback, rows);
	}
	db.all("SELECT * from characters ORDER BY init", sendListForProcessing);
}

exports.getOrderedCharList = getOrderedCharList;