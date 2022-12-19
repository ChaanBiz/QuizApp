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
function scoreButton(e) {
	var score = 0;
  
	//Getting text on dragging divs
	let divs = document.getElementsByClassName("drag");
	var answerOne = divs[6].textContent || divs[6].innerText;
	var answerTwo = divs[0].textContent || divs[0].innerText;
	var answerThree = divs[8].textContent || divs[8].innerText;
	var answerFour = divs[9].textContent || divs[9].innerText;
	var answerFive = divs[1].textContent || divs[1].innerText;
  
	//add score, check correct value from dragging box to dropping box
	if (answerOne == document.getElementById("div1").getAttribute("value")) {
	  score++;
	}
	if (answerTwo == document.getElementById("div2").getAttribute("value")) {
	  score++;
	}
	if (answerThree == document.getElementById("div3").getAttribute("value")) {
	  score++;
	}
	if (answerFour == document.getElementById("div4").getAttribute("value")) {
	  score++;
	}
	if (answerFive == document.getElementById("div5").getAttribute("value")) {
	  score++;
	}
  
	//dito mo lagay yung score board para paglick nung button lalabas sya
	console.log(score);
  }

// replay function

function replay() {
    document.getElementById('score_board').style.display = 'none';
}