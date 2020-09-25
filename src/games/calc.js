import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const operand1 = getRandomNumber(0, 20);
  const operand2 = getRandomNumber(0, 20);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let rightAnswer = 0;

  switch (operator) {
    case '+':
      rightAnswer = operand1 + operand2;
      break;
    case '-':
      rightAnswer = operand1 - operand2;
      break;
    case '*':
      rightAnswer = operand1 * operand2;
      break;
    // no default
  }

  const question = {
    text: `Question: ${operand1} ${operator} ${operand2}`,
    rightAnswer: String(rightAnswer),
  };

  return question;
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
