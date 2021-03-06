import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

export default (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}`);

  console.log(description);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const { qustion, rightAnswer } = generateQuestionAndAnswer();

    console.log(`Question: ${qustion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!!!`);
};
