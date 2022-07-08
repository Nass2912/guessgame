'use strict';

const message = document.querySelector('.message') as HTMLParagraphElement;
const guess = document.querySelector('.guess') as HTMLInputElement;
const check = document.querySelector('.check') as HTMLButtonElement;
const score = document.querySelector('.score') as HTMLSpanElement;
const again = document.querySelector('.again') as HTMLButtonElement;
const highscore = document.querySelector('.highscore') as HTMLSpanElement;
const left = document.querySelector('.left') as HTMLElement;
const number = document.querySelector('.number') as HTMLDivElement;

let guessed: number;
let myNumber = Math.floor(Math.random() * 20);

check.addEventListener('click', function () {
  +guessed = guess.value;
  if (guessed < 1 || guessed > 19) {
    alert('Number not in range');
    guess.value = '';
  } else {
    if (guessed < myNumber) {
      message.innerText = 'Number too low';
      +score.innerText -= 1;
    } else if (guessed > myNumber) {
      message.innerText = 'Number too high';
      +score.innerText -= 1;
    } else {
      message.innerText = 'You won';
      document.body.style.backgroundColor = 'green';
      if (score.innerText > highscore.innerText) {
        highscore.innerText = score.innerText;
      }
      +number.innerText = guessed;
    }
  }
});

again.addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  myNumber = Math.floor(Math.random() * 20);
  guess.value = '';
  +score.innerText = 20;
  number.innerText = '?';
});
