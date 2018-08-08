let randNum = Math.floor(Math.random()*10)+1;
let playerAnswer =  document.querySelector("#playerAnswer");
let gameResults = document.querySelector("#gameResults");
let gameOver = document.querySelector("#gameOver");
let turnsLeft = document.querySelector("#turnsLeft");
let resetButton = document.getElementById("reset");
let turns = 3;
let win = false;

playerAnswer.addEventListener("change", function(){
    let guess = Number(playerAnswer.value);
    if(guess === randNum && turns !== 0){
        gameResults.textContent = ('Good job! The number was ' + randNum + ". Click Start Over to generate a new random number!");
        turns = 0;
        win = true;
        resetButton.classList.remove("disappear");
    } else if (guess > randNum && guess < 11 && turns !== 0){
        gameResults.textContent = ('Too High');
        playerAnswer.value = ('')
        turns--;
        turnsLeft.textContent = turns;
    } else if (guess < randNum && guess > 0 && turns !== 0){
        gameResults.textContent = ('Too Low');
        playerAnswer.value = ('')
        turns--;
        turnsLeft.textContent = turns;
    } else if (guess < -1 || guess > 11 && turns !== 0){
        gameResults.textContent = ('Please input a number between 1-10')
        playerAnswer.value = ('')
        turns--;
        turnsLeft.textContent = turns;
    }else if (isNaN && turns !== 0){
        gameResults.textContent = ("\"" + playerAnswer.value + "\"" + ' is not allowed. Choose a number between 1-10');
        playerAnswer.value = ('')
        turns--;
        turnsLeft.textContent = turns;
    }
    
    if(turns === 0 && win === false){
        playerAnswer.value = ('')
        gameOver.textContent = ('Game Over! The Number was: ' + randNum)
        turnsLeft.textContent = turns;
        resetButton.classList.remove("disappear");
    }
    
}) 


resetButton.addEventListener("click", function(){
    randNum = Math.floor(Math.random()* 10)+1;
    gameResults.textContent = ('');
    playerAnswer.value = ('');
    turns = 3;
    turnsLeft.textContent = turns;
    gameOver.textContent = ('')
    resetButton.classList.add("disappear");
    win = false;
});
