

function convertListToHTML(response, callback, result_list) {
	var content = "";
	result_list.forEach(function(result) {
		content += "<br>Name: " + result.name + " Initiative: " + result.init + " " + result.stat1name + ": " + result.stat1value;
	});
	// Should actually consider checking for errors at some point.
	var error = null;
	callback(error, response, content, 200);
}

exports.convertListToHTML = convertListToHTML;