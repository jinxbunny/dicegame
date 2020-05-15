const diceImg = document.getElementById(`diceImg`);
const diceNum = document.getElementById(`currentNumber`);
const diceScore = document.getElementById(`currentScore`);
const rollBtn = document.getElementById(`rollBtn`);
const winLoose = document.getElementById(`winLoose`);
//history
const list = document.getElementById('past');
const history = document.getElementById(`history`);
const histBtn = document.getElementById(`histBtn`);
const modalBG = document.getElementById(`modal-bg`);
const closeMBtn = document.getElementById(`closeModal`);
//dice design
const diceChoise = document.getElementById(`diceChoice`);
const pickBtn = document.getElementById(`pickBtn`);
const modalBG2 = document.getElementById(`modal-bg2`);
const whiteBtn = document.getElementById(`whiteBtn`);
const blueBtn = document.getElementById(`blueBtn`);
const pinkBtn = document.getElementById(`pinkBtn`);

let diceChoice = "white";
let randomNumber = 0; //local?
let score = 0;
let timesRolled = 0;
let padding = 100;


if (score == 0){
     diceImg.style.opacity=`0`;
}

histBtn.addEventListener(`click`, () => {
    modalBG.style.visibility= `visible`;
});

closeMBtn.addEventListener(`click`, () => {
    modalBG.style.visibility= `hidden`;
});


rollBtn.addEventListener(`click`, () => {
    if (score <20 & randomNumber !=1){
        diceImg.style.opacity=`1`;
        diceImg.src=`img2/${diceChoice}Dice7.png`;
        //show a blurred dice image for 100ms then start the Randomiser function
        setTimeout('randomiser();', 100);
    } else {
        //if game is over, reset everything
        score = 0;
        randomNumber=0;
        timesRolled=0;
        diceImg.style.opacity=`0`;
        rollBtn.textContent=(`Roll`);
        rollBtn.style.backgroundColor = `rgb(40, 127, 174)`;
        winLoose.textContent=(``);
        diceScore.textContent=(`Roll To Score`);
    }
});

const randomiser = () => {
    //generate random number between 1 and 6
    i=Math.floor((Math.random() * 6) + 1);
    randomNumber = i;
    //ammend the image name to corrispond with the newly generated random number
    diceImg.src=`img2/${diceChoice}Dice${randomNumber}.png`;
    //add that random numnber to the over all score
    score += i;
    //count how many times the player rolled the dice 
    timesRolled ++;
    //display the last rolled number (can be removed)
    // diceNum.textContent=(`You Rolled: ${randomNumber}`);
    //display the current total score
    diceScore.textContent=(`Your Total Score: ${score}`);
    console.log(randomNumber);
    console.log(score);
    if (randomNumber == 1){
        diceScore.textContent= (`Your Final Score: ${score}`);
        winLoose.textContent= (`You Lost After ${timesRolled} Rolls!`);
        //change roll button to say play again
        rollBtn.textContent= (`Play Again`);
        rollBtn.style.backgroundColor= `rgb(157, 55, 65`;
        //store a loss in the history list
        let listItem= document.createElement('li');
        listItem.textContent= (`Lost with ${score} Points in ${timesRolled} Rolls`);
        list.appendChild(listItem);
        // padding += 18;
        // history.style.paddingBottom= `${padding}px`;
    } else if (score >19 && randomNumber!=0){
        diceScore.textContent=(`Your Final Score: ${score}`);
        winLoose.textContent=(`You Won With ${timesRolled} Rolls!`);
        //change roll button to say play again
        rollBtn.textContent=(`Play Again`)
        rollBtn.style.backgroundColor= `rgb(157, 55, 65`;
        //store a win in the history list
        let listItem= document.createElement('li');
        listItem.textContent= (`Won with ${score} Points in ${timesRolled} Rolls`);
        list.appendChild(listItem);
        // padding += 18;
        // history.style.paddingBottom= `${padding}px`;
    } else {
        winLoose.textContent+= `.`;
    }
};

//Dice Choice Code

pickBtn.addEventListener(`click`, () => {
    modalBG2.style.opacity=`1`;
    modalBG2.style.visibility= `visible`;
});

whiteBtn.addEventListener(`click`, () => {
    modalBG2.style.opacity=`0`;
    modalBG2.style.visibility= `hidden`;
    diceChoice = `white`;
    diceImg.src=`img2/${diceChoice}Dice${randomNumber}.png`;
});

blueBtn.addEventListener(`click`, () => {
    modalBG2.style.opacity=`0`;
    modalBG2.style.visibility= `hidden`;
    diceChoice = `blue`;
    diceImg.src=`img2/${diceChoice}Dice${randomNumber}.png`;
});

pinkBtn.addEventListener(`click`, () => {
    modalBG2.style.opacity=`0`;
    modalBG2.style.visibility= `hidden`;
    diceChoice = `pink`;
    diceImg.src=`img2/${diceChoice}Dice${randomNumber}.png`;
});