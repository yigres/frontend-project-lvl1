import readlineSync from 'readline-sync';
import { getRandomNumber, errorAnswer } from '../index.js';

const gcd = (number1, number2) => {
  // Euclid's algorithm
  let num1 = number1;
  let num2 = number2;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  return (num1 + num2);
};

export default () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const rightAnswer = gcd(randomNumber1, randomNumber2);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== rightAnswer.toString()) {
    errorAnswer(userAnswer, rightAnswer);
    return 0;
  }

  console.log('Correct!');
  return 1;
};
