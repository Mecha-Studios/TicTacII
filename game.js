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

function checkWinner(){
    if(box1.value === "x" && box2.value === "x" && box3.value === "x"){
        winnertxt.innerHTML = "X Wins!";
    } else if(box1.value === "x" && box4.value === "x" && box7.value === "x"){
        winnertxt.innerHTML = "X Wins!";
    } else if(box1.value === "x" && box5.value === "x" && box9.value === "x"){
        winnertxt.innerHTML = "X Wins!";
    } else if(box2.value === "x" && box5.value === "x" && box8.value === "x"){
        winnertxt.innerHTML = "X Wins!";
    } else if(box1.value === "o" && box2.value === "o" && box3.value === "o"){
        winnertxt.innerHTML = "O Wins!";
    } else if(box1.value === "o" && box4.value === "o" && box7.value === "o"){
        winnertxt.innerHTML = "O Wins!";
    } else if(box1.value === "o" && box5.value === "o" && box9.value === "o"){
        winnertxt.innerHTML = "O Wins!";
    } else if(box2.value === "o" && box5.value === "o" && box8.value === "o"){
        winnertxt.innerHTML = "O Wins!";
    } else{
        winnertxt.innerHTML = "No Winner!";
    }
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
}