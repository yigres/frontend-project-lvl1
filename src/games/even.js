import readlineSync from 'readline-sync';
import { getRandomNumber, errorAnswer } from '../index.js';

const isEven = (num) => {
  if (num > 0 && num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const randomNumber = getRandomNumber();

  console.log(`Question: ${randomNumber}`);

  const rightAnswer = isEven(randomNumber);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== rightAnswer) {
    errorAnswer(userAnswer, rightAnswer);
    return 0;
  }

  console.log('Correct!');
  return 1;
};
