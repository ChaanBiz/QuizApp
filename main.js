function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	const htmlId = ev.target.id;
	const htmlElement = document.getElementById(htmlId);
	// if ID has the string drag, that means its a dragable div and its not supposed to be take a drop event so return immediately
	if (htmlId.includes("drag")) return;
	if (htmlElement.childElementCount > 0) return;

	const data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	htmlElement.childNodes[0].setAttribute(
		"style",
		"border: none; margin-bottom: 0; height: 95px;",
	);
	htmlElement.setAttribute("style", "border:solid 1px #000");
}

// scoring system

// replay function

/*function replay() {
    document.getElementById('score_board').style.display = 'none';
}*/
