import readlineSync from 'readline-sync';
import { getRandomNumber, errorAnswer } from '../index.js';

const isPrime = (num) => {
  if (num === 0) {
    return 'no';
  }

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => {
  const randomNumber = getRandomNumber(100);

  console.log(`Question: ${randomNumber}`);

  const rightAnswer = isPrime(randomNumber);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== rightAnswer) {
    errorAnswer(userAnswer, rightAnswer);
    return 0;
  }

  console.log('Correct!');
  return 1;
};
