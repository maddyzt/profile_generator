const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              let profileString =  `My name is ${answer1}. I like to listen to ${answer3} while I am ${answer2}. My favourite meal is ${answer4}, and my favourite thing to eat for that is ${answer5}. My favourite sport is ${answer6}, and my superpower is ${answer7}.`;
              console.log(profileString);
              rl.close();
            });
          });
        });
      });
    });
  });
});


