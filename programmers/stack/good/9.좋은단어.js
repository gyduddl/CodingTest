const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

input = input[0].split(' ')

console.log(input)

function solution(arr){

    let count = 0;
    for(let x of arr){
        if(!check(x)) count++
    }

    function check(x){
        let stack =[]
        for(let y of x){
            if(stack[stack.length-1]===y && stack.length !==0){ 
                stack.pop()
            }else stack.push(y)

        }
        // return stack.length? false: true;
        return stack.length;
        
    }

    return count
}

let arr = ['AAA', 'BB', 'ABAB']
console.log(solution(input))//2