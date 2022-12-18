function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const htmlElement = document.getElementById(ev.path[0].id);

    if(htmlElement.childElementCount > 0) return;
    ev.target.appendChild(document.getElementById(data));
    htmlElement.childNodes[0].setAttribute("style", "border: solid 1px #000; margin-bottom: 0; height: 95px;");
    console.log(ev);
}

// scoring system

// replay function

/*function replay() {
    document.getElementById('score_board').style.display = 'none';
}*/
