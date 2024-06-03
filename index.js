//string rotator

const inicial = window.prompt("Introduce texto");
let text = inicial.trim() + " ";

function rotateString(string) {
	array = string.split("");
	removed = array.splice(-1);
	return removed.concat(array).join("");
}

function rotateText() {
	text = rotateString(text);
	document.getElementById("cartel").innerHTML = text;
	array = text.split("");
	console.log(array[array.length - 1]);
}

setInterval(rotateText, 500);
