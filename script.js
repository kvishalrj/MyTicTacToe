// variable initialization
let turn = "x";
let boxes = Array.from(document.getElementsByClassName('box'));
let boxText = document.getElementsByClassName('box');
let reset = document.getElementById('reset');
let gif = document.getElementById('gif');
let gameOver = new Audio('/music.mp3');
let gameClick = new Audio('/ting.mp3');
let infoText = document.getElementById('turnText');
let resetBtn = document.getElementById('reset');
let winText = document.getElementById('winText');
let line = document.getElementById('line');
let gameText = document.getElementById('turn');
let overText = document.getElementById('overText');


// function to check win
const checkWin = ()=>{
    let wins = [
        [0,1,2,3,4.5,0],
        [3,4,5,3,13,0],
        [6,7,8,3,21,0],
        [0,3,6,-13,12,90],
        [1,4,7,4,12,90],
        [2,5,8,21.5,12,90],
        [0,4,8,3,12,45],
        [2,4,6,4,12.5,-45]
    ]
    wins.forEach(e=>{
        if((boxText[e[0]].innerText !== "") && (boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText)){
            gameClick.pause();
            gameOver.play();
            line.style.transform = `translate(${e[3]}vh, ${e[4]}vw) rotate(${e[5]}deg)`;
            line.style.width = "20vw";
            gif.style.visibility = "visible";
            winText.style.opacity = "1";
            gameText.style.visibility = "hidden";
            overText.style.visibility = "visible";
            winText.innerText = "You Won!";
        }
    })
}

// function to reset
resetBtn.addEventListener('click', ()=>{
    boxes.forEach((element)=>{
        element.innerText = "";
        turn = "x";
        infoText.innerText = turn;
        gif.style.width = "0px"
        winText.style.opacity = "0";
        gameOver.pause();
        line.style.width = "0vw";
        overText.style.visibility = "hidden";
        gameText.style.visibility = "visible";
    })
})


// function to change turn
const changeTurn = ()=>{
    if(turn === "x"){
        turn = "0";
    }
    else{
        turn = "x";
    }
    return turn;
}

// game logic
boxes.forEach((element)=>{
    element.addEventListener('click', ()=>{
        if(element.innerText === ""){
            element.innerText = turn;
            gameClick.play();
            checkWin();
            changeTurn();
            infoText.innerText = turn;
        }
    })
})