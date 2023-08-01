'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

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