//**귀여운 라이언*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [N, K] = input[0].split(' ').map(Number);

let arr = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let count = 0;
let answer = Infinity;

while (right < arr.length) {
    //처음과 끝이 라이언일때 제일 짧음
    if (arr[right] === 1) count++;
    while (count === K) {
        if (arr[left] === 1) count--;
        answer = Math.min(answer, right - left + 1);
        left++;
    }
    right++;
}

console.log(answer === Infinity ? -1 : answer);
