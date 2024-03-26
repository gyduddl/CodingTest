const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
let n = input.shift();
let num = n.split('').map(Number);
let m = input.shift();
let arr = input.length ? input.shift().split(' ').map(Number) : [];
console.log(arr);
let set = new Set(arr);
let answer = [];
console.log(answer);
if (Number(n) !== 100) {
    console.log('ff');
    for (let x of num) {
        let count = [11, 0];
        for (let i = 0; i < 10; i++) {
            if (!set.has(x)) {
                if (x === i) {
                    answer.push(x);
                    break;
                }
            } else {
                if (!set.has(i) && Math.abs(x - i) < count[0]) {
                    count = [Math.abs(x - i), i];
                }
            }
        }
        if (count[0] !== 11) answer.push(count[1]);
    }
}

let numCount = answer.length;
let curNum = Number(answer.join(''));

numCount +=
    Math.abs(100 - Number(n)) < Math.abs(curNum - Number(n)) ? Math.abs(100 - Number(n)) : Math.abs(curNum - Number(n));
console.log(numCount);
