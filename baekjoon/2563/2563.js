const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n,...input] = fs.readFileSync(filePath).toString().trim().split('\r\n')

input = input.map(i=>i.split(' '))
let count =0;


// 1) 0과 1로 구분하는 방법
//let paper = Array.from(Array(100),()=>Array(100).fill(0))
// let count =0
// for(let i =0; i<n; i++){
//     let x= +input[i][0]; // + 연산자를 쓴 이유는 문자열을 숫자열로 바꿔주기 위해서
//     let y= +input[i][1];
//     for(let j=0; j<10; j++){
//         for(let h=0; h<10; h++){
//             if(paper[x+j][y+h]!==0)continue;
//             if(paper[x+j][y+h]===0){
//                 paper[x+j][y+h]=1
//                 count++
//             }

//         }
//     }
// }

// 2) false, true로 구분하는 방법
let paper = Array.from(Array(100),()=>Array(100).fill(false))
//let paper = new Array(100).fill().map(i=>new Array(100).fill(false))
for (let i = 0; i < n; i++) {
    const colorPaper = input[i];
    let x = +colorPaper[0]
    let y = +colorPaper[1];

    for (let j = 0; j < 10; j++) {
        for (let m = 0; m < 10; m++) {
            paper[x + j][y + m] = true;
        }
    }
}

const answer = paper.reduce((prev, curr) => {
    for (const el of curr) {
        if (el) {
            prev++;
        }
    }

    return prev;
}, 0);



console.log(answer)
