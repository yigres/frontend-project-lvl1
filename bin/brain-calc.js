#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

console.log('What is the result of the expression?');

const getRandomNumber = () => {
  const max = 20;
  return Math.floor(Math.random() * Math.floor(max));
};

let countRightAnswer = 0;
const operators = ['+', '-', '*'];

for (let i = 0; i < 3; i += 1) {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let result = 0;

  switch (operator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    // no default
  }

  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);

  const answer = readlineSync.question('Your answer: ');

  if (result.toString() !== answer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  console.log('Correct!');
  countRightAnswer += 1;
}

if (countRightAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
}
