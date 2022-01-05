const a = [1, 2, 3, 4]
console.log(a.map(x => x * 2));

let persons = [
    { id: 1, name: "DORJ", age: 19 },
    { id: 2, name: "BOLD", age: 13 },
    { id: 3, name: "BALDAN", age: 15 },
    { id: 4, name: "TSETSGEE", age: 20 },
    { id: 5, name: "DULMAA", age: 23 }
];

let Adults = persons.filter(nas => nas.age > 17)
console.log(Adults)