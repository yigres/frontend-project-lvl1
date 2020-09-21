import main from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num > 0 && num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameGenerator = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);

  const rightAnswer = isEven(randomNumber);

  return rightAnswer;
};

export default () => {
  main(gameDescription, gameGenerator);
};
