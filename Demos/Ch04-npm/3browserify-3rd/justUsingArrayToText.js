

const arrUnion = require("arr-union");

const arrayToText = require("./array-to-text");

document.addEventListener("DOMContentLoaded", function() {
	
	let text = arrayToText(combinedArray);

	document.getElementById("text").innerHTML = text;
});
