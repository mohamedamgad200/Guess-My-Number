'use strict';
//make a random value between 1->20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// state variable(Application state) for score
let score = 20;
// state variable(Application state) for highscore
let highscore = 0;
//change the message in the project make this to refactoring code and reduce repetition
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//check button
document.querySelector('.check').addEventListener('click', function () {
  //convert to number because input returen string
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  }
  // when player win
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //manipulation styling css
    //background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //width
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Again button
document.querySelector('.again').addEventListener('click', function () {
  //restore initial values of the score and secretNumber variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Restore the initial conditions of the message, number, score and guess input field
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //manipulation styling css
  //background color
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
