const diceImg = document.getElementById("diceImg");
const diceNum = document.getElementById("currentNumber");
const diceScore = document.getElementById("currentScore");
const rollBtn = document.getElementById("rollBtn")
const winLoose = document.getElementById("winLoose")
var randomNumber = 0;
var score = 0;
var timesRolled = 0;
var gameStat = "won";


if (score == 0){
     diceImg.style.opacity="0";
}


rollBtn.addEventListener('click', () => {
    if (score < 21){
        diceImg.style.opacity="1";
        //show a blurred dice image for 100ms
        //then start the Randomiser function
        diceImg.src="img/whitedice7.png";
        setTimeout('Randomiser();', 100);
    } else {
        //if game is over, reset everything
        score = 0;
        randomNumber=0;
        timesRolled=0;
        diceImg.style.opacity="0";
        rollBtn.textContent=(`Roll`);
        rollBtn.style.backgroundColor = `rgb(40, 127, 174)`;
        rollBtn.style.marginTop=`0px`;
        winLoose.textContent=(``);
        diceScore.textContent=(`Roll To Score`);
    }
});

const Randomiser = () => {
    //generate random number between 1 and 6
    i=Math.floor((Math.random() * 6) + 1);
    randomNumber = i;
    //ammend the image name to corrispond with the newly generated random number
    diceImg.src=`img/whitedice${randomNumber}.png`;
    //add that random numnber to the over all score
    score += i;
    //count how many times the player rolled the dice 
    timesRolled ++;
    //display the last rolled number (can be removed)
    // diceNum.textContent=(`You Rolled: ${randomNumber}`);
    //display the current total score
    diceScore.textContent=(`Your Total Score: ${score}`);
    console.log(score);
    if (score == 21){
        diceScore.textContent=(`Your Final Score: ${score}`);
        winLoose.textContent=(`You Won With ${timesRolled} Rolls!`);
        rollBtn.textContent=(`Play Again`)
        rollBtn.style.backgroundColor = `rgb(157, 55, 65`;
        rollBtn.style.marginTop=`50px`;
    } else if (score > 21){
        diceScore.textContent=(`Your Final Score: ${score}`);
        winLoose.textContent=(`You Lost After ${timesRolled} Rolls!`);
        rollBtn.textContent=(`Play Again`);
        rollBtn.style.marginTop=`50px`;
        rollBtn.style.backgroundColor = `rgb(157, 55, 65`;
    } else {
        winLoose.textContent+= `.`;
    }
};