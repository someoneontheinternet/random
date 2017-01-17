/*
	Please include Libraries:
		- Jquery Ajax
		- UAParser

	CDNs:
	https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/0.7.12/ua-parser.min.js
*/

var parser = new UAParser();

// return OBJ: Entire User Agent
var userAgent = parser.getResult();
var out = JSON.stringify(userAgent);

// Test
var url = "localhost:3000"

$.ajax({
	type: "POST",
	url: url,
	data: out,
	contentType: "application/json",
	dataType: "json",
	success: function(msg) {
		alert(msg);
	}
});