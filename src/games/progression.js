import readlineSync from 'readline-sync';
import { getRandomNumber, errorAnswer } from '../index.js';

export default () => {
  const progressionArray = [];
  const number1 = getRandomNumber();
  const difference = getRandomNumber();

  for (let i = 0; i < 10; i += 1) {
    progressionArray[i] = number1 + i * difference;
  }

  const randomIndex = getRandomNumber();
  const rightAnswer = progressionArray.splice(randomIndex, 1, '..');

  const questionString = progressionArray.join(' ');
  console.log(`Question: ${questionString}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== rightAnswer.toString()) {
    errorAnswer(userAnswer, rightAnswer);
    return 0;
  }

  console.log('Correct!');
  return 1;
};
