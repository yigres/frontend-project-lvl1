import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateQuestionAndAnswer = () => {
  const operand1 = getRandomNumber(0, 20);
  const operand2 = getRandomNumber(0, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  return {
    qustion: `${operand1} ${operator} ${operand2}`,
    rightAnswer: String(calculate(operand1, operand2, operator)),
  };
};

export default () => {
  runEngine(description, generateQuestionAndAnswer);
};
