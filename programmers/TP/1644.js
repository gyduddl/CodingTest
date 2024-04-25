const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim().split('\r\n'));

let left = 0;
let right = 0;
let sum = 0;
let count = 0;

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 3; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    if (num === 2) return true;
    return true;
}

let arr = Array.from({ length: input }, (v, i) => {
    if (isPrime(i)) return i + 1;
    else return null;
});
console.log(arr);

// if(sum===input){
//     count++;
//     sum -=arr[left];
//     left++
// }else if(){

// }
