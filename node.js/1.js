// fish = 2 + 2;
const chalk = require('chalk');
const { time } = require('console');
const { number } = require('yargs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Numbers: ', (input) => {
    rl.close();
    let add = 0;
    let times = 1;
    let inp = input.split(" ");
    inp.forEach(number => {
        if (number % 2 == 0) {
            add = add + parseInt(number);
        } else {
            times = times * parseInt(number);
        }
    });
    console.log(chalk.green("Addition of tegsh too:"), add)
    console.log(chalk.green("Multiple of sondgoi too:"), times)
})