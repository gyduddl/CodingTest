//https://github.com/WaiNaat/BOJ-JavaScript/blob/main/2167.js

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [ROW, COL] = input[0].split(' ').map(Number)
//slice(시작_포함o,끝_포함x)=> 두번째 인자가 없을시 시작인덱스부터 끝까지 나온다.
const matrix = input.slice(1, 1 + ROW).map((line) => line.split(' ').map(Number));
const positions = input.slice(2 + ROW).map((line) => line.split(' ').map((value) => Number(value) - 1));

for (let r = 0; r < ROW; r += 1) {
    for (let c = 1; c < COL; c += 1) {
      matrix[r][c] += matrix[r][c - 1];
    }
  }

//   for (let r = 1; r < ROW; r += 1) {
//     for (let c = 0; c < COL; c += 1) {
//       matrix[r][c] += matrix[r - 1][c];
//     }
//   }

console.log(matrix)

//   const sol = [];
//   positions.forEach(([rStart, cStart, rEnd, cEnd]) => {
//     let sum = matrix[rEnd][cEnd];
//     if (cStart > 0) sum -= matrix[rEnd][cStart - 1];
//     if (rStart > 0) sum -= matrix[rStart - 1][cEnd];
//     if (rStart > 0 && cStart > 0) sum += matrix[rStart - 1][cStart - 1];
//     sol.push(sum);
//   });
  
//   // output
//   console.log(sol.join('\n'));

