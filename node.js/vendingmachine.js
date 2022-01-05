// Products available
const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
];
const chalk = require('chalk');
// Coins available
// [500, 200, 100, 50, 20, 10]
// fish = 2 + 2;
const inp = "100,1";
let a;
let b;
a = inp.split(",")[0]
b = inp.split(",")[1]
console.log(a)
console.log(b)
if (b == undefined) {
    console.log(chalk.red("Invalid Order: Incorrect Syntax"))
} else {
    let num = products.filter(product => product.number == b);
    let price = products.filter(num => num.price);
    if (price <= a) {
        console.log(chalk.red("Invalid Order: Not Enough Money"))
    }
    console.log()
}