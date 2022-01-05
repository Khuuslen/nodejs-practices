const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let num = 0;
const print = (num, lim) => {
    if (num <= lim) {
        console.log(num)
        print(num + 1, lim)
    } else { return }
}
rl.question(chalk.blue('Enter Number: '), (inp) => {
    rl.close();
    print(num, inp)
})