import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  // Euclid's algorithm
  let num1 = number1;
  let num2 = number2;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return (num1 + num2);
};

const generateQuestionAndAnswer = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);

  return {
    text: `${number1} ${number2}`,
    rightAnswer: String(gcd(number1, number2)),
  };
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
