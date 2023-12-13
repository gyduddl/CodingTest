const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let n = Number(input.shift())

let miro= []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split(' ').map(Number))
}

let ch = Array.from({length:n},()=>0)
let tmp = Array.from({length:n},()=>Array(2).fill(0))
console.log(tmp)
    
let ans = Number.MAX_SAFE_INTEGER;

function dfs(){

}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(ch[i]===0){

        }
    }
}