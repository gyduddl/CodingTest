//재귀함수로 풀기
//피보나치

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// [0]이거 안해줘서 백준에서 틀림
let input =Number(fs.readFileSync(filePath).toString().split('\r\n')[0]);

// let num =[0,1]

// const solution =(n)=>{
//     if(num[n]!==undefined) return num[n]
//     //새로 만들어주기
//     num[n]=solution(n-1)+solution(n-2);
//     return num[n]
// }

const solution=(n)=>{
    if(n<2) return n
    return solution(n-1)+solution(n-2)
}



console.log(solution(input))