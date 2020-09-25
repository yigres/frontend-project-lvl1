import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const progressionArray = [];
  const number1 = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 10);
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray[i] = number1 + i * difference;
  }

  const randomIndex = getRandomNumber(0, progressionLength);
  const rightAnswer = progressionArray.splice(randomIndex, 1, '..');

  const progression = progressionArray.join(' ');

  const question = {
    text: `Question: ${progression}`,
    rightAnswer: String(rightAnswer),
  };

  return question;
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
