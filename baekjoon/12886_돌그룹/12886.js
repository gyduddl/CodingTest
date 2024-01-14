const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let arr= input[0].split(' ').map(Number)

let sum = arr.reduce((a,b)=> a+b)

console.log(sum)