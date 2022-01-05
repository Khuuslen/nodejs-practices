const chalk = require("chalk");

const users = [
    { id: 11, name: 'bat', age: 23, group: 'editor' },
    { id: 47, name: 'bold', age: 28, group: 'admin' },
    { id: 85, name: 'tulga', age: 34, group: 'editor' },
    { id: 97, name: 'suren', age: 28, group: 'admin' }
];

const mop = users.map((b) => {
    let c = b.name[0].toUpperCase() + b.name.slice(1);
    return {...b, name: c };
});
console.log(chalk.blue("Map(Medium)"), mop);

const filt = mop.filter(adm => adm.group == 'admin');
console.log(chalk.blue("Filter"), filt)

// const reduser = () => ;
// const redus = mop.reduce()