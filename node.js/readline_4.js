// fish = 2 + 2;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter: ', (s) => {
    let upperS = s.toUpperCase();
    console.log(upperS);
    // let r = s.split("").reverse().join("");
    // console.log(r);
    let r = "";
    let a = s.split("");
    a.forEach((c) => {
        r = c + r;
    })
    console.log(r);
    rl.close();
})