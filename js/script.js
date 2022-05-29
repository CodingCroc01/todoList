var button = document.getElementById("add");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var remove = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

// for the first present delete buttons event listener

for (var i = 0; i < remove.length; i++) {
	remove[i].addEventListener("click", removeParent);
}

function removeParent(event) {
	event.target.removeEventListener("click", removeParent);
	event.target.parentNode.remove();
}

//click funtion for applying done class to a clicked li

function getEventTarget(e) {
    e = window.event;
    return e.target; 
}

ul.onclick = function (event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

//short method of above step (checking which li is clicked and applying class)

// ul.onclick = function (event) {
// 	var target = event.target;
// 	target.classList.toggle("done");
// }

function inputLength() {
	return input.value.length;
}

// creating an li element along with delete button

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.onclick = removeParent;
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	button.innerHTML = "Delete";

	// or alternatively -> button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

//add li event on mouseclick

function addOnClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//add li event on keypress

function addOnKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addOnClick);

input.addEventListener("keypress", addOnKeyPress);