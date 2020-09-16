#!/usr/bin/env node

import {
  greetUser,
  congratulateUser,
} from '../src/index.js';
import gcdGame from '../src/games/gcd.js';

const nameUser = greetUser();

console.log('Find the greatest common divisor of given numbers.');

let countRightAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  if (!gcdGame()) {
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }

  countRightAnswer += 1;
}

congratulateUser(countRightAnswer, nameUser);
