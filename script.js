'use strict';

const bodyEl = document.querySelector('body');
const againBtn = document.querySelector('.btn--again');
const checkBtn = document.querySelector('.btn--check');
const questionMarkEl = document.querySelector('.number');
const userNumber = document.querySelector('.number-input');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

// STARTING VALUES
let targetNumber = Math.round(Math.random() * 20) + 1;
let score = 20;

checkBtn.addEventListener('click', () => {
    if(!Number(userNumber.value)) messageEl.innerHTML = '⛔️ No number!';
    if(+userNumber.value === targetNumber) {
        messageEl.innerHTML = '🎉 Correct number!'
        questionMarkEl.innerHTML = `${targetNumber}`;
        questionMarkEl.style.width = '30rem';
        bodyEl.style.backgroundColor = 'rgb(96, 179, 71)';
    // update the highscore to the current score IF the score is higher than the current highscore
        if(score > +highscoreEl.innerHTML) highscoreEl.innerHTML = score;
    }
    if(+userNumber.value > targetNumber && score !== 0) {
        messageEl.innerHTML = '📈 Too high!'
        score--;
        scoreEl.innerHTML = `${score}`;
    }
    if(Number(userNumber.value) && +userNumber.value < targetNumber && score !== 0){
        messageEl.innerHTML = '📉 Too low!';
        score--;
        scoreEl.innerHTML = `${score}`;
    }
    if(score === 0) {
        messageEl.innerHTML = '💥 You lost the game!';
    }
})

// Reset all values when the user clicks the 'again' button so they can play again
againBtn.addEventListener('click', () => {
    targetNumber = Math.round(Math.random() * 20) + 1;
    userNumber.value = '';
    questionMarkEl.innerHTML = '?'
    questionMarkEl.style.width = '15rem';
    messageEl.innerHTML = 'Start guessing...'
    score = 20;
    scoreEl.innerHTML = `${score}`;
    bodyEl.style.backgroundColor = '#222';
})