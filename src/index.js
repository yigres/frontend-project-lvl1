import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const getRandomNumber = (max = 10) => Math.floor(Math.random() * Math.floor(max));

const errorAnswer = (answerUser, rightResult) => {
  console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightResult}".`);
};

const congratulateUser = (countRightAnswer, nameUser) => {
  if (countRightAnswer === 3) {
    console.log(`Congratulations, ${nameUser}!!!`);
  }
};

export {
  greetUser, getRandomNumber, errorAnswer, congratulateUser,
};
