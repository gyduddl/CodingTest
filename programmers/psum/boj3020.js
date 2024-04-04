const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

let minObstacles = N; // 최소 파괴해야 할 장애물 수
let countMin = 0; // 최소 파괴해야 할 장애물 수가 나오는 구간의 개수

// 석순과 종유석의 위치를 파악하고 누적합을 이용하여 각 위치에서 파괴해야 할 장애물 수 계산
const stalactites = new Array(M + 1).fill(0); // 석순
const stalagmites = new Array(M + 1).fill(0); // 종유석
for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
        stalactites[arr[i]]++;
    } else {
        stalagmites[arr[i]]++;
    }
}

for (let i = M - 1; i >= 1; i--) {
    stalactites[i] += stalactites[i + 1];
    stalagmites[i] += stalagmites[i + 1];
}

for (let i = 1; i <= M; i++) {
    const obstacles = stalactites[i] + stalagmites[M - i + 1];
    if (obstacles < minObstacles) {
        minObstacles = obstacles;
        countMin = 1;
    } else if (obstacles === minObstacles) {
        countMin++;
    }
}

console.log(minObstacles, countMin);

//아래 코드는 시간초과

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

// let [N, M] = input.shift().split(' ').map(Number);

// let arr = input.map((x) => Number(x));

// let psum = Array.from({ length: M }, () => 0);

// arr.forEach((a, i) => {
//     if (i % 2) {
//         for (let j = 0; j < a; j++) {
//             psum[j]++;
//         }
//     } else {
//         for (let j = M - 1; j > M - 1 - a; j--) {
//             psum[j]++;
//         }
//     }
// });

// let min = Math.min(...psum);

// let count = psum.filter((x) => x === min).length;
// console.log(min, count);
