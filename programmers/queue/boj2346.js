const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let N = input.shift();

input = input.shift().split(' ').map(Number);

let arr = input.map((v, i) => ({
    val: v,
    cur: i + 1,
}));

let queue = [];

while (arr.length > 0) {
    let asc = arr.shift();
    console.log(asc.val);
    let [A, B] = [asc.val, asc.cur];
    queue.push(B);
    if (A > 0) {
        for (let i = 0; i < A - 1; i++) {
            arr.push(arr.shift());
        }
    } else {
        for (let i = 0; i < Math.abs(A); i++) {
            arr.unshift(arr.pop());
            // if (arr.length) {
            //     let temp = arr.pop();
            //     if (temp === undefined) continue;
            //     arr.unshift(temp);
            // }
        }
    }
}

console.log(queue); //1 4 5 3 2
