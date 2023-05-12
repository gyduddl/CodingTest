//차집합 set, map으로 풀기
//1. 첫째 줄에 집합 A에는 속하면서 집합 B에는 속하지 않는 원소의 개수를 출력한다. 
//2. 다음 줄에는 구체적인 원소를 빈 칸을 사이에 두고 증가하는 순서로 출력한다.
//3. 집합 A에는 속하면서 집합 B에는 속하지 않는 원소가 없다면 첫째 줄에 0만을 출력하면 된다

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n').map(x=>x.split(' ').map(Number))

// let [n,m] = input[0]

// let A = new Set(input[1]);
// let B = new Set(input[2]);

// 방법 1
// Set.prototype.difference = function (set) {
//     return new Set([...this].filter(v => !set.has(v)));
//   };

// 방법 2
// Set.prototype.difference = function (set) {
//     let array= new Set(this)

//     for(let value of set){
//       array.delete(value)
//     }

//     return array
//   };



// console.log(A.difference(B).size)
// if(A.difference(B).size!==0){
//     console.log([...A.difference(B)].sort((a, b) => a - b).join(' '))
// }

// 방법 3
// let A = input[1]
// let B = input[2]
// let answer=new Set();
// A.forEach(e=>answer.add(e));
// B.forEach(e=>answer.delete(e))
// console.log(answer.size)
// console.log([...answer].sort((a,b)=>a-b).join(' '))

