#!/usr/bin/env node

import {
  greetUser,
  congratulateUser,
} from '../src/index.js';
import progressionGame from '../src/games/progression.js';

const nameUser = greetUser();

console.log('What number is missing in the progression?');

let countRightAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  if (!progressionGame()) {
    console.log(`Let's try again, ${nameUser}!`);
    break;
  }

  countRightAnswer += 1;
}

congratulateUser(countRightAnswer, nameUser);
