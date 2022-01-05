const { _, random } = require("lodash");
import chalk from 'chalk';

let array = [
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  { id: "34abc", title: "The blog post we want", content: "..." },
];

let array2 = [1, 2, 3, 1, 3, 1, 2, 2, 6, 3, 9, 0, 1, 6, 3];

let array3 = [undefined, "cat", false, 434, "", 32.0, true];

console.log(_.keyBy(array, "id"));
console.log(_.uniq(array2));
console.log(_.without(array3, undefined, false, ""));
console.log(Math.floor(Math.random() * (21 - 10) + 10) + " This is normal JS");
console.log(_.random(10, 20) + " This is Lodash");
