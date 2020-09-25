import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const gameNumber = getRandomNumber(0, 10000);

  const question = {
    text: `Question: ${gameNumber}`,
    rightAnswer: isEven(gameNumber) ? 'yes' : 'no',
  };

  return question;
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
