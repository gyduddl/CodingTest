//**배열 합치기 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let arr = ' ';
let A = input[1].split(' ');
let B = input[2].split(' ');

console.log(
    A.concat(B)
        .sort((a, b) => a - b)
        .join(' ')
);
