const chalk = require("chalk");

const whereiswaldo = (arr) => {
    let rowId, colId;
    const flat = arr.reduce((acc, cur) => acc.concat(cur));

    const letterCount = flat.reduce((counter, letter) => {
        counter[letter] = (counter[letter] == undefined ? 1 : counter[letter] + 1)
        return counter;
    }, {});
    const oddLetter = Object.keys(letterCount).filter((letter) => letterCount[letter] == 1)[0];
    rowId = arr.findIndex((row) => row.includes(oddLetter))
    colId = arr[rowId].findIndex((col) => col == oddLetter)
    return [rowId + 1, colId + 1]
}
console.log(chalk.blue("Waldo location: " + chalk.greenBright(whereiswaldo(
    [
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["P", "O", "O", "O"],
        ["O", "O", "O", "O"],
    ]))))
console.log(chalk.blue("Waldo location: " + chalk.greenBright(whereiswaldo(
    [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "B", "A"]
    ]))))
console.log(chalk.blue("Waldo location: " + chalk.greenBright(whereiswaldo(
    [
        ["c", "c", "c", "c"],
        ["c", "c", "d", "c"]

    ]))))