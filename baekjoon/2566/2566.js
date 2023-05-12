const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n').map(x=>x.trim().split(' ').map(Number))

let array = input.flat();

let max = array.slice().sort((a,b)=>b-a)[0]
// let max = Math.max(...array) -> 이것도 가능
//slice를 쓰는 이유가 뭐지?? 그저 복사하는 것만 하는건데..?
console.log(max)

let maxnum= array.indexOf(max)
let n = Math.floor(maxnum/9)+1 //열구하기
let m = (maxnum%9)+1 //행구하기

console.log(n,m)


// 2) 다른 방식: 답은 나오는데 백준에서는 틀렸다고 함
// let num=0
// let n=0
// let m=0

// for(let i=0; i<9;i++){
//     for(let j=0; j<9;j++){
//         if(num<input[i][j]){
//             num=input[i][j];
//             n=i+1;
//             m=j+1;
//         } 
//     }
// }

// console.log(num) 
// console.log(n, m)

