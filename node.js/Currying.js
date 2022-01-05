const chocolates = [
    { "dark": true, "flavour": "milk" },
    { "dark": false, "flavour": "milk" },
    { "dark": false, "flavour": "almond" },
    { "dark": true, "flavour": "almond" },
    { "dark": false, "flavour": "white" },
];
const checkProperty = (prop) => (value) => (elem) => elem[prop] == value;
const darkch = chocolates.filter(checkProperty("dark")(true))
console.log(darkch)
const almch = chocolates.filter(checkProperty("flavour")("almond"))
console.log(almch)