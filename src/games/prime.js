import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0) {
    return 'no';
  }

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 100);

  const question = {
    text: `Question: ${number}`,
    rightAnswer: isPrime(number) ? 'yes' : 'no',
  };

  return question;
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
