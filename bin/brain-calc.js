#!/usr/bin/env node

import {
  greetUser,
  congratulateUser,
} from '../src/index.js';
import calcGame from '../src/games/calc.js';

const nameUser = greetUser();

console.log('What is the result of the expression?');

let countRightAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  if (!calcGame()) {
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }

  countRightAnswer += 1;
}

congratulateUser(countRightAnswer, nameUser);
