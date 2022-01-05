const chalk = require('chalk');
const { basename } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter Name: ', (input) => {
    rl.close();
    namevalidator(input);
})
const badname = () => {
    console.log(chalk.red("Invalid Name"))
};
const namevalidator = (name) => {
    let arr = name.split(" ");
    console.log(arr)
    let firstname_abreiv;
    if (arr[0].charAt(0) == arr[0].charAt(0).toUpperCase() && arr[1].charAt(0) == arr[1].charAt(0).toUpperCase()) {
        if (arr[2] != undefined) {
            if (arr[0].charAt(0) == arr[0].charAt(0).toUpperCase() && arr[1].charAt(0) == arr[1].charAt(0).toUpperCase()) {} else {
                badname();
                return
            }
        }
    } else {
        badname();
        return
    }
    if (arr[0].includes(".")) {
        firstname_abreiv = true
        if (arr[2] != undefined) {
            badname();
            return
        } else {}
    }
    if (arr[1].includes(".")) {
        if (firstname_abreiv == true) {
            badname();
            return
        } else {}
    }
}