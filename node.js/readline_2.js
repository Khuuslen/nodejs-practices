// fish = 2 + 2;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter: ', (input) => {
    readline.close();
    let str = input;
    str = str.toUpperCase();
    console.log(str)
})