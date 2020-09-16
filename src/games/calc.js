import readlineSync from 'readline-sync';
import { getRandomNumber, errorAnswer } from '../index.js';

export default () => {
  const operators = ['+', '-', '*'];
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let rightAnswer = 0;

  switch (operator) {
    case '+':
      rightAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      rightAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      rightAnswer = randomNumber1 * randomNumber2;
      break;
    // no default
  }

  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== rightAnswer.toString()) {
    errorAnswer(userAnswer, rightAnswer);
    return 0;
  }

  console.log('Correct!');
  return 1;
};
