#!/usr/bin/env node

import {
  greetUser,
  congratulateUser,
} from '../src/index.js';
import evenGame from '../src/games/even.js';

const nameUser = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let countRightAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  if (!evenGame()) {
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }

  countRightAnswer += 1;
}

congratulateUser(countRightAnswer, nameUser);
