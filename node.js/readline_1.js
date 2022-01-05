// fish = 2 + 2;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var answer = 0;
readline.question('Enter Numbers: ', (input) => {
    readline.close();
    let value = input.split(' ');
    value.forEach((el) => {
        answer += parseInt(el)
    })
    console.log(answer);
})