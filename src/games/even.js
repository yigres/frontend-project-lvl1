import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 10000);

  return {
    qustion: String(number),
    rightAnswer: isEven(number) ? 'yes' : 'no',
  };
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
