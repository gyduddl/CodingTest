const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// trim을 안써서 백준에서 틀림.문자열 좌우에서 공백을 제거하는 함수가 trim() 함수 입니다
let input =fs.readFileSync(filePath).toString().trim().split('\r\n');

input.shift()
let count =0;
const recursion=(s, l, r)=>{
    count++
    if(l>=r)return 1;
    else if (s[l]!==s[r]) return 0;
    else return recursion(s, l+1, r-1)
}

const isPalindrome=(s)=>{
    return recursion(s,0,s.length-1)
}
for(let x of input){
    count = 0;
    // console.log(`${isPalindrome(x)} ${count}`)
    console.log(isPalindrome(x),count)
}


//다른 방법
// const [N, ...rest] = input;

// const recursion=(s, l, r,c)=>{
//     if(l>=r)return [1,c];
//     else if (s[l]!==s[r]) return [0,c];
//     else return recursion(s, l+1, r-1,c+1)
// }

// const isPalindrome=(s)=>{
//     return recursion(s,0,s.length-1,1)
// }

// const answer = rest.map((s) => isPalindrome(s).join(" "));
// console.log(answer.join("\n"));