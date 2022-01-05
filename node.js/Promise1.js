// If data is not a number (NaN), return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Number: ', (input) => {
  rl.close();
  Is_even_or_ood(input)
    .then(reso => {
      console.log(reso)
    })
    .catch(reje => {
      console.log(reje)
    })
})
const Is_even_or_ood = (inp) => {
  let HMMMMM;
    return new Promise((resolve, reject) => {
      if(isNaN(inp)){reject(chalk.bgRedBright.black("Bruh It Said Enter Number "+inp+" Isnt A Number!"))}
      else {
        if(inp % 2 != 0){
          setTimeout(() => {
             HMMMMM = "Odd";
            resolve(chalk.magentaBright(HMMMMM))
          }, 1000)
      }else{
        setTimeout(() => {
           HMMMMM = "Even";
          reject(chalk.magentaBright(HMMMMM))
        }, 2000)
      }}
    })
  }
  