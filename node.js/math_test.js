// fish = 2 + 2;
const MATH = require('./math')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// readline.question('Enter radius(PI): ', (input) => {
//     readline.close();
//     let inp = input;
//     inp = inp * 2;
//     inp = inp * MATH.PI;
//     console.log(inp);
// })
// readline.question('Enter Numbers(Max): ', (input) => {
//         readline.close();
//         let asdfghjkl = input.split(" ");
//         a = asdfghjkl[0];
//         b = asdfghjkl[1];
//         console.log(MATH.MAX(a, b))
//     })
// readline.question('Enter Numbers(Min): ', (input) => {
//         readline.close();
//         let asdfghjkl = input.split(" ");
//         a = asdfghjkl[0];
//         b = asdfghjkl[1];
//         console.log(MATH.MIN(a, b))
// })
// readline.question('Enter Number(sqrt)( too big): ', (input) => {
//     readline.close();
//     console.log(MATH.SQRT(input))
// })
readline.question('Enter Number(Round)(A . counts as a number): ', (input) => {
    readline.close();
    let asdfghjkl = input.split(" ");
    const a = asdfghjkl[0];
    const b = asdfghjkl[1];
    console.log(MATH.ROUND(Number(a), Number(b)))
})

// ----- To Use One Make All Others Unabled -----