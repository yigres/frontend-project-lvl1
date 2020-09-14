#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => {
  const max = 1000;
  return Math.floor(Math.random() * Math.floor(max));
};

const isEven = (num) => {
  if (num > 0 && num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let countRightAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNumber();

  console.log(`Question: ${randomNumber}`);

  const isEvenNumber = isEven(randomNumber);
  const answer = readlineSync.question('Your answer: ');

  if (isEvenNumber !== answer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEvenNumber}".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  console.log('Correct!');
  countRightAnswer += 1;
}

if (countRightAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
}
