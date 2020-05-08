const diceImg = document.getElementById("diceImg");
const diceNum = document.getElementById("currentNumber");
const diceScore = document.getElementById("currentScore");
var randomNumber = 0;
var score = 0;

diceImg.addEventListener('click', () => {
    //show a blurred dice image for 
    diceImg.src="img/whitedice7.png";
    setTimeout('Randomiser();', 100);
});

const Randomiser = () => {
    //generate random number between 1 and 6
    i=Math.floor((Math.random() * 6) + 1);
    randomNumber = i;
    //ammend the image name to corrispond with the newly generated random number
    diceImg.src=`img/whitedice${randomNumber}.png`;
    //add that random numnber to the over all score
    score += i;
    //display the last rolled number (can be removed)
    diceNum.textContent=(`You Rolled: ${randomNumber}`);
    //display the current total score
    diceScore.textContent=(`Your Total Score: ${score}`);
    console.log(score);
}