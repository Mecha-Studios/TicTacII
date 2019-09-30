var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var winnertxt = document.getElementById("winnertxt");
winnertxt.style.fontSize = "72px";
winnertxt.style.color = "white";
var scorex = 0;
var scorey = 0;
var xscoree = document.getElementById("xscore");
var yscoree = document.getElementById("yscore");

function checkWinner(){
    if(box1.value === "x" && box2.value === "x" && box3.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box1.value === "x" && box4.value === "x" && box7.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box1.value === "x" && box5.value === "x" && box9.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box2.value === "x" && box5.value === "x" && box8.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box3.value === "x" && box6.value === "x" && box9.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box3.value === "x" && box5.value === "x" && box7.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box4.value === "x" && box5.value === "x" && box6.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box7.value === "x" && box8.value === "x" && box9.value === "x"){
        winnertxt.innerHTML = "X Wins!";
        scorex++;
    } else if(box1.value === "o" && box2.value === "o" && box3.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box1.value === "o" && box4.value === "o" && box7.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box1.value === "o" && box5.value === "o" && box9.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box2.value === "o" && box5.value === "o" && box8.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box3.value === "o" && box6.value === "o" && box9.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box3.value === "o" && box5.value === "o" && box7.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box4.value === "o" && box5.value === "o" && box6.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else if(box7.value === "o" && box8.value === "o" && box9.value === "o"){
        winnertxt.innerHTML = "O Wins!";
        scorey++;
    } else{
        winnertxt.innerHTML = "No Winner!";
    }
    xscoree.innerHTML = "Score(X): " + scorex;
    console.log("Score(X): " + scorex);
    yscoree.innerHTML = "Score(O): " + scorey;
    console.log("Score(O): " + scorey);
}

function startGame(){
    box1.disabled = false;
    box2.disabled = false;
    box3.disabled = false;
    box4.disabled = false;
    box5.disabled = false;
    box6.disabled = false;
    box7.disabled = false;
    box8.disabled = false;
    box9.disabled = false;
    timer();
    document.getElementById('reset').disabled = false;
    document.getElementById('newround').disabled = false;
    document.getElementById('checkwinner').disabled = false;
}

var seconds = 120;

function timer(){
    var timer = document.getElementById("timer");
    setInterval(function(){
        timer.innerHTML = "Time: " + seconds--;
        if(seconds === 0){
            stop();
            checkWinner;
        }
    }, 1000);
}

function newGame(){
    box1.value = '';
    box2.value = '';
    box3.value = '';
    box4.value = '';
    box5.value = '';
    box6.value = '';
    box7.value = '';
    box8.value = '';
    box9.value = '';
    winnertxt.innerHTML = '';
    seconds = 120;
}