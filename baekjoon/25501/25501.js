// 팰린드롬

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

input.shift()

// let count = 0

// const recursion=(str,n,m)=>{
//     count++
//     //  m이 n보다 작거나 같다는것은 재귀함수를 계속 지나서 같게 되었으니
//     // 모든 조건을 통과한 팰린드롬이라서 1이다.
//     if(n>=m) return 1
//     else if(str[n]!==str[m])return 0
//     else return recursion(str,n+1,m-1)
// }


// const isPalindrome=(str)=>{
//     return recursion(str,0,str.length-1)
// }
// for(let x of input){
//     count = 0
//     console.log(isPalindrome(x),count)
// }


//다른 방법
const recursion=(str,n,m,c)=>{
    if(n>=m) return [1, c]
    else if(str[n]!==str[m])return [0,c] 
    else return recursion(str,n+1,m-1,c+1)
}


const isPalindrome=(str)=>{
    return recursion(str,0,str.length-1,1)
}
let answer = input.map(x=>isPalindrome(x).join(' '))

console.log(answer.join('\n'))
