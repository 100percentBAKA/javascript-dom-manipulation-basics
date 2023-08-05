'use strict';

// SELECTING DOM ELEMENTS 
const score1Element = document.querySelector('#score-1');
const score2Element = document.getElementById('score-2');
const diceElement = document.querySelector('.dice');
const rollDice = document.querySelector('.button-roll');
const hold = document.querySelector('.button-hold');
const newGame = document.querySelector('.button-new');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const currentScore1 = document.getElementById('current-score-1');
const currentScore2 = document.getElementById('current-score-2');


// CONSTANTS 
let isPlayer1Active = false; // player 1 is active by default
let isPlayer2Active = false;

currentScore1.textContent = 0;
currentScore2.textContent = 0;

score1Element.textContent = 0;
score2Element.textContent = 0;
// 0 (number) --> '0' (string) due to coercion 
diceElement.classList.add('hidden');

function checkActive() {
    isPlayer1Active = player1.classList.contains('player-active');
    isPlayer2Active = player2.classList.contains('player-active');
}

const playerSwitch = function () {
    // if (player1.classList.contains('.player-active')) {
    //     player1.classList.remove('player-active');
    // }
    // else {
    //     player1.classList.add('player-active');
    // }

    // if (player2.classList.contains('.player-active')) {
    //     player2.classList.remove('player-active');
    // }
    // else {
    //     player2.classList.add('player-active');
    // }

    checkActive();

    if (isPlayer1Active) {
        player1.classList.remove('player-active');
        setTimeout(
            function () {
                player2.classList.add('player-active');
            },
            100 // in milliseconds
        )
    }

    if (isPlayer2Active) {
        player2.classList.remove('player-active');
        setTimeout(
            function () {
                player1.classList.add('player-active');
            },
            100 // in milliseconds
        )

        // isPlayer1Active = true;
        // isPlayer2Active = false;
    }
}

rollDice.addEventListener(
    'click', function () {
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        const diceImage = `dice-${diceNumber}`;
        diceElement.setAttribute('src', `${diceImage}.png`);
        diceElement.classList.remove('hidden');

        checkActive();

        if (diceNumber === 1) {
            if (isPlayer1Active) {
                currentScore1.textContent = 0;
                playerSwitch();
            }

            if (isPlayer2Active) {
                currentScore2.textContent = 0;
                playerSwitch();
            }
        }
        else {
            if (isPlayer1Active) {
                const currentScore = parseInt(currentScore1.textContent);
                currentScore1.textContent = currentScore + diceNumber;
            }

            if (isPlayer2Active) {
                const currentScore = parseInt(currentScore2.textContent);
                currentScore2.textContent = currentScore + diceNumber;
            }
        }
    }
)


hold.addEventListener(
    'click', function () {

        checkActive();
        if (isPlayer1Active) {
            const score = Number(score1Element.textContent);
            const currentScore = Number(currentScore1.textContent);
            score1Element.textContent = score + currentScore;
            currentScore1.textContent = 0;
        }

        if (isPlayer2Active) {
            const score = Number(score2Element.textContent);
            const currentScore = Number(currentScore2.textContent);
            score2Element.textContent = score + currentScore;
            currentScore2.textContent = 0;
        }

        playerSwitch();
    }
);


newGame.addEventListener(
    'click', function () {
        let isPlayer1Active = false; // player 1 is active by default
        let isPlayer2Active = false;

        currentScore1.textContent = 0;
        currentScore2.textContent = 0;

        score1Element.textContent = 0;
        score2Element.textContent = 0;
        // 0 (number) --> '0' (string) due to coercion 
        diceElement.classList.add('hidden');
        player1.classList.add('player-active');
        player2.classList.remove('player-active');
    }
)