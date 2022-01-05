const yargs = require("yargs").argv;
const chalk = require("chalk");
let bg = "black";
let clr = "white";
let txt = "Hello Human";
console.log(chalk[bg][clr](txt));

// let args = process.argv.slice(2);;
// let inp = args.join("");
// if (inp.includes('-bg')) {
//     bg = "bg" + inp.split("-bg")[1].split("-")[0];
//     bg = bg.toUpperCase();
// }
// if (inp.includes('-t')) {
//     txt = inp.split("-t")[1].split("-")[0];
// }
// if (inp.includes('-c')) {
//     clr = inp.split("-c")[1].split("-")[0];
// }