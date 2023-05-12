// function solution(test){
//     let n=test.length;
//     let m=test[0].length;
//     let pair=[]
//     for(let i=1; i<=n;i++){
//         for(let j=1; j<=n;j++){
//             pair.push([i,j])
//         }
//     }
//     console.log(pair)
// }

// let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
// console.log(solution(arr));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\r\n');
const [n,m] = input.shift();
const tests = input.map(line => line.split(" ").map(el => Number(el)));

const pair = [];
for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        pair.push([i,j]);
    }
}

let cnt = 0;
for (const [mento, menti] of pair) {
    let isPossible = true;
    for (const test of tests) {
        const mentoIdx = test.indexOf(mento);
        const mentiIdx = test.indexOf(menti);
        console.log(test.indexOf(2))
        if (mentoIdx >= mentiIdx) {
            isPossible = false;
            break;
        }
    }
    if (isPossible) cnt++;
}

// console.log(pair)


//흐ㅜ.... 시발 먼소리야.... 