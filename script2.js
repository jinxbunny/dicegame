const rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const newBtn = document.getElementById("newBtn");
const diceImg = document.getElementById("diceImg");
const p1ScoreShow = document.getElementById("p1ScoreShow");
const p2ScoreShow = document.getElementById("p2ScoreShow");
const p1CurrentShow = document.getElementById("p1CurrentShow");
const p2CurrentShow = document.getElementById("p2CurrentShow");
const p1Title = document.getElementById("p1Title");
const p2Title = document.getElementById("p2Title");
//history
const list = document.getElementById('past');
const history = document.getElementById(`history`);
const histBtn = document.getElementById(`histBtn`);
const modalBG = document.getElementById(`modal-bg`);
const closeMBtn = document.getElementById(`closeModal`);

let player = 1;
let p1Score = 0;
let p1Current = 0;
let p2Score = 0;
let p2Current = 0;
let diceChoice = `white`;
let randomNumber = 0;
let gamesPlayed = 0;
let timesRolled = 0;
let lastWin =``;
let finalScore = 0;
//restart
const gameOver = () => {
    gamesPlayed ++;
    let listItem= document.createElement('li');
    listItem.textContent= (`${lastWin} won this game with ${finalScore} points!`);
    list.appendChild(listItem);
    diceImg.style.visibility= `hidden`;
    rollBtn.style.visibility= `hidden`;
    holdBtn.style.visibility= `hidden`;
    newBtn.style.visibility= `visible`;
    histBtn.style.visibility= `visible`;
    timesRolled = 0;
    finalScore=0;
    player = 1;
    p1Score = 0;
    p1Current = 0;
    p2Score = 0;
    p2Current =0;
    diceChoice = "white";
    randomNumber = 0;
}

//switch players
const playerSwitch = ()=>{
    if (player == 1){
        rollBtn.style.backgroundColor=("rgb(255, 164, 164)");
        holdBtn.style.backgroundColor=("rgb(255, 164, 164)");
        console.log("player 1");

    } else if (player == 2){
        rollBtn.style.backgroundColor=("rgb(117, 193, 250)");
        holdBtn.style.backgroundColor=("rgb(117, 193, 250)");
        console.log("player 2");
    }
};


//start New Game
newBtn.addEventListener('click', () =>{
    p1Title.textContent=(`Player 1`);
    p2Title.textContent=(`Player 2`);
    diceImg.style.visibility = `visible`;
    newBtn.style.visibility = `hidden`;
    rollBtn.style.visibility = `visible`;
    holdBtn.style.visibility = `hidden`;
    histBtn.style.visibility= `hidden`;
    p1ScoreShow.textContent=(`0`);
    p2ScoreShow.textContent=(`0`);
    p1CurrentShow.textContent = p1Current;
    p1Current = 0;
    p1CurrentShow.textContent = p1Current;
    p1Current = 0;
});

//

//roll button
rollBtn.addEventListener(`click`, () => {
        //show a blurred dice image for 100ms
        //then start the Randomiser function
        diceImg.src=`img2/${diceChoice}Dice7.png`;
        setTimeout('Randomiser();', 100);
});

//random number generator
const Randomiser = () => {
    i=Math.floor((Math.random() * 6) + 1);
    randomNumber = i;
    diceImg.src=`img2/${diceChoice}dice${randomNumber}.png`;
    timesRolled ++;
    console.log(randomNumber);
    if (player == 1 && randomNumber != 1 ){
        p1Current+= i;
        holdBtn.style.visibility= `visible`;
        p1CurrentShow.textContent=(`${p1Current}`);
    } else if (player == 1 && randomNumber == 1 ){
        p1Score = 0;
        p1Current= 0;
        holdBtn.style.visibility= `visible`;
        p1ScoreShow.textContent=(`${p1Score}`);
        p1CurrentShow.textContent=(`${p1Current}`);
        player = 2;
        playerSwitch();
    } else if (player == 2 && randomNumber != 1 ){
        p2Current+= i;
        console.log(`Player 2: ${p2Score}`);
        holdBtn.style.visibility= `visible`;;
        p2CurrentShow.textContent=(`${p2Current}`);
    } else if (player == 2 && randomNumber == 1 ){
        p2Score = 0;
        p2Current= 0;
        holdBtn.style.visibility= `visible`;
        p2ScoreShow.textContent=(`${p2Score}`);
        p2CurrentShow.textContent=(`${p2Current}`);
        player = 1;
        playerSwitch();
    }
};

//Hold Button
holdBtn.addEventListener('click', () =>{
    if (player==1){
        p1Score = (p1Score+p1Current);
        p1Current = 0;
        p1CurrentShow.textContent = p1Current;
        p1ScoreShow.textContent=(`${p1Score}`);
        if (p1Score <20){
            player = 2;
            playerSwitch();
        } else {
            lastWin = (`Player 1`);
            finalScore = (p1Score);
            p1Title.textContent=(`Winner!`);
            gameOver();
        }
    } else if (player==2 && p2Score<20){
        p2Score = (p2Score+p2Current);
        p2Current = 0;
        p2CurrentShow.textContent = p2Current;
        p2ScoreShow.textContent=(`${p2Score}`);
        if (p2Score <20){
            player = 1;
            playerSwitch();
        } else {
            lastWin = (`Player 2`);
            finalScore = (p2Score);
            p2Title.textContent=(`Winner!`);
            gameOver();
        }
    }
});

//History Button
histBtn.addEventListener(`click`, () => {
    modalBG.style.opacity=`1`;
    modalBG.style.visibility= `visible`;
});

closeMBtn.addEventListener(`click`, () => {
    modalBG.style.opacity=`0`;
    modalBG.style.visibility= `hidden`;
});