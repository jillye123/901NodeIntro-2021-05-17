

const arrUnion = require("arr-union");
const arrayToText = require("./array-to-text");

document.addEventListener("DOMContentLoaded", function() {
	const arrayOne = [1, 2, 3, 4, 5, 6, 7];
	const arrayTwo = [3, 4, 5, 6, 7, 8, 9];

	const combinedArray = arrUnion(arrayOne, arrayTwo);
	let text = arrayToText(combinedArray);

	document.getElementById("text").innerHTML = text;
});
