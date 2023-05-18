// 재귀함수로 풀어야 한다. 

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = Number(fs.readFileSync(filePath).toString())

let answer=input
const sycle=(num)=>{
    if(num<1){
        return 1
    }
    return num*sycle(num-1)
}

console.log(sycle(answer))