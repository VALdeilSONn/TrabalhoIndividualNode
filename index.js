const readline = require('readline-sync');

const cssList = [];

const addCSS = () => {
  while (true) {
    const code = readline.question("Enter CSS code or 'exit': ");
    if (code.toLowerCase() === 'exit') break;
    if (code) cssList.push(code);
  }
  console.log(cssList.sort().join('\n'));
};

addCSS();