const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter: ', (inp)=> {;
    setTimeout(() => {clearInterval(timerid);},parseInt(inp)*1000 +1000);
    let inp2 = parseInt(inp);
    const timerid = setInterval(() => {
        inp2--;
        console.log(parseInt(inp) - inp2);
    }, 1000);
    rl.close();
})