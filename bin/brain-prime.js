#!/usr/bin/env node

import {
  greetUser,
  congratulateUser,
} from '../src/index.js';
import primeGame from '../src/games/prime.js';

const nameUser = greetUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let countRightAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  if (!primeGame()) {
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }

  countRightAnswer += 1;
}

congratulateUser(countRightAnswer, nameUser);
