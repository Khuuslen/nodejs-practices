const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const yargs = require('yargs').argv
const readline = require('readline');
// console.log(yargs.l, "TEST LINE")
// console.log(path.dirname(), "TEST LINE")
if (yargs.l) {
    // Code For -l Command
    if (yargs.l == true) {
        const directoryPath = path.join();
        fs.readdir(directoryPath, function(err, files) {
            console.log(chalk.greenBright("Stats for:", yargs.l));
            if (err) {
                return console.log(chalk.bgRed('Unable to scan directory: ' + err));
            }
            files.forEach(function(file) {
                fs.stat(directoryPath + '/' + file, (error, stats) => {
                    if (error) {
                        console.log(error);
                    } else {

                        console.log(chalk.green(`${file} `), chalk.magenta("Creator(uid):", `${stats.uid}`), chalk.yellow("File Size:", `${stats.size}`, "Bytes"), chalk.cyan("Birthtime:", `${stats.birthtime}`), chalk.blue("Is Path File:", stats.isFile()))
                    }
                });
            });
        });
    } else {
        fs.readdir(yargs.l, function(err, files) {
            console.log(chalk.greenBright("Stats for:", yargs.l));
            if (err) {
                return console.log(chalk.bgRed('Unable to scan directory: ' + err));
            }
            files.forEach(function(file) {
                fs.stat(yargs.l + '/' + file, (error, stats) => {
                    if (error) {
                        console.log(error);
                    } else {

                        console.log(chalk.green(`${file} `), chalk.magenta("Creator(uid):", `${stats.uid}`), chalk.yellow("File Size:", `${stats.size}`, "Bytes"), chalk.cyan("Birthtime:", `${stats.birthtime}`), chalk.blue("Is Path File:", stats.isFile()))
                    }
                });
            });
        });
    }
} else if (yargs._[0] == (undefined)) {
    // Code For no input(ls)
    const directoryPath = path.join();
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            return console.log(chalk.bgRed('Unable to scan directory: ' + err));
        }
        files.forEach(function(file) {
            console.log(chalk.green(file));
        });
    });
} else {
    // Code For Only Path Entered
    const directoryPath = path.resolve("/Users/Khuslen", yargs._[0]);
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            return console.log(chalk.bgRed('Unable to scan directory: ' + err));
        }
        files.forEach(function(file) {
            console.log(chalk.green(file));
        });
    });
}