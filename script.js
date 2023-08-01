'use strict'; 

console.log(document.querySelector('.guess-result')
.textContent);
// document.querySelector('.guess-result').textContent = 'Correct Number !!'

// document.querySelector('.guess').value = 22;
// let element = document.querySelector('.guess').value;
// console.log(element)

document.querySelector('.check').addEventListener(
    'click', function() {
        console.log(document.querySelector('.guess').value)
    }
)