const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const answers = [];

const askQuestion = (index) => {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      askQuestion(index + 1);
    });
  } else {
    rl.close();
    generateProfile();
  }
};

const generateProfile = () => {
  const [name, activity, music, meal, food, sport, superpower] = answers;
  console.log(`\nProfile Generated:\n${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.\n`);
};

askQuestion(0);
