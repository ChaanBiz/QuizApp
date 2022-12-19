<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matching Type Quiz</title>
    <link rel="stylesheet" href="quiz.css">
    <script src="main.js"></script>
</head>
<body>
    <div id="container"> 
        <div id="questions">
            <div id="ps">
                <div id="question1">How long was the Genie stuck in Aladdin's lamp?</div>
                <div id="question2">Who was Disney's first villain?</div>
                <div id="question3">How many brothers does Prince Hans have in Frozen?</div>
                <div id="question4">What is the name of Wendy's dog in Peter Pan?</div>
                <div id="question5">What is the name of Belle's father in Beauty and the Beast?</div>
            </div>
        </div>
        <div id="drop_area">
            <div id="div1" ondrop="drop(event);" ondragover="allowDrop(event);"></div>
            <div id="div2" ondrop="drop(event);" ondragover="allowDrop(event);"></div>
            <div id="div3" ondrop="drop(event);" ondragover="allowDrop(event);"></div>
            <div id="div4" ondrop="drop(event);" ondragover="allowDrop(event);"></div>
            <div id="div5" ondrop="drop(event);" ondragover="allowDrop(event);"></div>
        </div>
        
        <div id="drag_options">
            <div id="wrapper">
                <div id="drag1" draggable="true" ondragstart="drag(event)">Evil Queen</div>
                <div id="drag2" draggable="true" ondragstart="drag(event)">Maurice</div>
                <div id="drag3" draggable="true" ondragstart="drag(event)">Nyla</div>
                <div id="drag4" draggable="true" ondragstart="drag(event)">Cruela Devil</div>
                <div id="drag5" draggable="true" ondragstart="drag(event)">4</div>
                <div id="drag6" draggable="true" ondragstart="drag(event)">Moris</div>
                <div id="drag7" draggable="true" ondragstart="drag(event)">10000 Years</div>
                <div id="drag8" draggable="true" ondragstart="drag(event)">1000 Years</div>
                <div id="drag9" draggable="true" ondragstart="drag(event)">12</div>
                <div id="drag10" draggable="true" ondragstart="drag(event)">Nana</div>
            </div>
        </div>
    </div>

    <div id="submit_button">
        <button type="submit" id="submit">Submit</button>
    </div>

    <div id="handler">
        <div id="score_board">
            <div id="wrap">
                <h1>SCORE</h1>
                <div id="score">5</div>
                <div id="btnReplay" onclick="replay()">Home</div>
            </div>
        </div>
    </div>
</body>
</html>