// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// ////////////
// // Event Handling for User Input
// ////////////

// // on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('amirt');
//   if (key === '\u0003') {
//     process.exit();
//   }
// });

// console.log('after callback');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`My name is ${answer1}. I like to do ${answer2} and I like to listen ${answer3} while I do ${answer2}`);
              console.log(`My favourite meal is ${answer4} and I like ot eat ${answer5}`);
              console.log(`My favourite sport is ${answer6}`);
              console.log(`My superpower is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

