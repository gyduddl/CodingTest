//같은 행이면 공격 받음 row1 == row2
//같은 열이면 공격 받음 col1 == col2
//같은 대각선이면 공격받음 ((row1 - row2)의 절대값 == (col1 - col2)의 절대값)

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const solution =(N)=>{
    const row = new Array(N).fill(0);
    let cnt= 0;
    const isPossible=()=>{

    }
}

console.log(solution(input));