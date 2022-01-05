let arr = [5, 6, -1, 2, 12, -5, 27, 3];
// let answer = 0;
// for (let i = 0; arr[i] != undefined; i++) {
//     answer = answer + arr[i];
// }
// console.log(answer);
let answer = 0;

arr.forEach((value) => {
    answer = answer + value;
})
console.log(answer);