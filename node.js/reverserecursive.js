const chalk = require('chalk');
const { reverse } = require('dns');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let i = 0;
let reversed = [];
const rev = (input) => {
    if (input.length >= i) {
        i++;
        reversed.push(input[input.length - i])
        rev(input);
    } else {
        console.log(reversed.slice(0, input.length).join(""))
        return
    }
}
rl.question(chalk.blue('Enter: '), (inp) => {
    rl.close();
    rev(inp)
})