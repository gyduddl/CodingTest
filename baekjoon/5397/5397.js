const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const L = Number(input[0])

for(let i=1; i<L+1;i++){
    let text=input[i].split('');
    let front=[];
    let back =[];


    for(let j=0; j<text.length; j++){
        switch(text[j]){
            case '<':
                if(front.length>0) back.push(front.pop());
                break;
            case '>':
                if(back.length>0) front.push(back.pop());
                break;
            case '-':
                if(front.length>0) front.pop();
                break;
            default:
                front.push(text[j]);
                break
        }
    }
    console.log(front.join('')+back.reverse().join(''))
}

// 커서를 이용하는 방식의 문제는 stack을 front와 back으로 나누어서 front | 커서위치 | back 으로 두고,

// 문제를 해결하는 것이 효율적입니다.

 

// 따라서 이 문제도 마찬가지로 push와 pop을 이용하여 문제를 해결할 수 있습니다.

 

// 이때, 마지막 출력에서 back은 한번 뒤집어주어야(reverse) 원하는 대로 출력이 가능합니다.

