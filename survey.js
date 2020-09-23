
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = []

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  answers.push(answer)
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What did you listen to while doing that", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        answers.push(answer);

        console.log(`Hey ${answers[0]}! Nice to meet you! It\s funny you like ${answers[1]}, I love it too!\n Though I must admit I don\'t listen to ${answers[2]} while doing ${answers[1]}. We should go for ${answers[3]} and you tell me why you enjoy ${answers[2]}!`)
         rl.close();
      })
    })
  })
});

