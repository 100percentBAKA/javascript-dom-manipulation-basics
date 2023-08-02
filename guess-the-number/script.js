'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

// console.log(document.getElementById('button-check').textContent);

document.querySelector('.check').addEventListener(
    'click', function () {
        const guessedNumber = Number(document.querySelector('.guess').value);
        // console.log(typeof guessedNumber);

        if (!guessedNumber) { // if guessedNumber not 0
            document.querySelector('.guess-result').textContent = '⛔ No Number!'
        }
        else if (guessedNumber === secretNumber) {
            document.querySelector('.guess-result').textContent = '🎉 Guess Correct!'
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '26rem';
            document.querySelector('.number').textContent = secretNumber;

            if (highScore < score) {
                highScore = score;
                document.querySelector('.span-high-score').textContent = highScore;
            }
        }
        else {

            score--;
            document.querySelector('.span-score').textContent = score;

            if (score > 0) {
                if (Math.abs(guessedNumber - secretNumber) == 1 ||
                    Math.abs(guessedNumber - secretNumber) == 2) {
                    document.querySelector('.guess-result').textContent = '🤞 Very Close!';
                }
                else {
                    if (guessedNumber > secretNumber) {
                        document.querySelector('.guess-result').textContent = '📈 Too High!';
                    }
                    else {
                        document.querySelector('.guess-result').textContent = '📉 Too Low!';
                    }
                }
            }
            else {
                document.querySelector('.guess-result').textContent = '💥 You Lost!'
                document.getElementById('button-check').disabled = true;
            }
        }
    }
)

document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        document.querySelector('.span-score').textContent = score;
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('.number').style.width = '13rem';
        document.querySelector('.guess-result').textContent = 'Start Guessing . . .'
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
    }
)