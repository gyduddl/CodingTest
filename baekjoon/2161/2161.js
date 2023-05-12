const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');


const num= Number(input[0])

let num2=[];
for(let i =1; i<=num;i++){
    num2.push(i)
}

let answer=[]

while(num2.length!==0){ //num2의 길이가 0이 아니라면
    const i = num2.shift();// 여기서 num2의 첫번쨰 index가 없어짐
    answer.push(i);
    if(num2.length!==0){ // num2의 길이가 0이 아니라면 
        num2.push(num2.shift());
    }
    else break
}
console.log(...answer)//1 3 5 7 4 2 6-> 이렇게 해야함. 근데 왜 그래야 하는지 이유를 모르겠음 
//console.log(...answer) -> [ 1, 3, 5, 7,4, 2, 6]
