'use strict';
var message = document.querySelector('.message');
var guess = document.querySelector('.guess');
var check = document.querySelector('.check');
var score = document.querySelector('.score');
var again = document.querySelector('.again');
var highscore = document.querySelector('.highscore');
var left = document.querySelector('.left');
var number = document.querySelector('.number');
console.log(typeof +score.innerText);
var guessed;
var myNumber = Math.floor(Math.random() * 20);
check.addEventListener('click', function () {
    guessed = guess.value;
    if (guessed < 1 || guessed > 19) {
        alert('Number not in range');
        guess.value = '';
    }
    else {
        if (guessed < myNumber) {
            message.innerText = 'Number too low';
            +score.innerText;
            1;
        }
        else if (guessed > myNumber) {
            message.innerText = 'Number too high';
            +score.innerText;
            1;
        }
        else {
            message.innerText = 'You won';
            document.body.style.backgroundColor = 'green';
            if (score.innerText > highscore.innerText) {
                highscore.innerText = score.innerText;
            }
            number.innerText = guessed;
        }
    }
});
again.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    myNumber = Math.floor(Math.random() * 20);
    guess.value = '';
    +score.innerText;
    20;
    number.innerText = '?';
});
