import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProrgression = (number1, difference, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression[i] = number1 + i * difference;
  }

  return progression;
};

const generateQuestionAndAnswer = () => {
  const number1 = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 10);

  const progression = getProrgression(number1, difference, progressionLength);

  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const rightAnswer = progression.splice(hiddenElementIndex, 1, '..');

  return {
    qustion: progression.join(' '),
    rightAnswer: String(rightAnswer),
  };
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
