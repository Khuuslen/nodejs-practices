// fish = 2 + 2;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter: ', (input) => {
    readline.close()
        // [1,2,3]
    let a = input.split("");
    // [3,2,1]
    let r = a.reverse();
    // '321'
    let final = r.join('')
    console.log(final)
})