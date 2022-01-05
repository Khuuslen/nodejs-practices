const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let i = 1;
let num = 1;
const print = (lim) => {
    if (i <= lim) {
        num = num * i;
        console.log(num)
        i++
        print(lim)
    } else { return }
}
rl.question(chalk.blue('Enter Number: '), (inp) => {
    rl.close();
    print(inp)
})