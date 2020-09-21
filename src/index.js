import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
};

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const greetPlayerByName = (playerName) => {
  console.log(`Hello, ${playerName}`);
};

const sayGameDescription = (gameQustion) => {
  console.log(gameQustion);
};

const errorAnswer = (answerUser, rightResult) => {
  console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightResult}".`);
};

const congratulateUser = (countRightAnswer, nameUser) => {
  if (countRightAnswer === 3) {
    console.log(`Congratulations, ${nameUser}!!!`);
  }
};

export default (gameDescription, gameGenerator) => {
  greetPlayer();

  const playerName = getPlayerName();

  greetPlayerByName(playerName);
  sayGameDescription(gameDescription);

  let countRightAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = gameGenerator();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      errorAnswer(userAnswer, rightAnswer);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }

    console.log('Correct!');

    countRightAnswer += 1;
  }

  congratulateUser(countRightAnswer, playerName);
};
