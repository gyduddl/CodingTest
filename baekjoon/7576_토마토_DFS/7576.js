// 2차원 토마토

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [m,n]=input[0].split(' ').map(Number)

let tomato = []

for(let i=1; i<input.length; i++){
    tomato.push(input[i].split(' ').map(Number))
}

// function solution(m,n,arr){
//     let dx= [-1,0,1,0]
//     let dy = [0,1,0,-1]
//     let queue = []
//     for(let i=0; i<n; i++){
//         for(let j=0; j<m; j++){
//             if(arr[i][j]===1){
//                 queue.push([i,j])

//             }
//         }
//     }
//     let head =0;

//     while(queue.length>head){
//         let [x,y] = queue[head++]
//             for(let k=0; k<4; k++){
//                 let nx = x+ dx[k]
//                 let ny= y+dy[k]
//                 if(nx>=0 && nx<n && ny>=0 && ny<m && arr[nx][ny]===0){
//                     queue.push([nx,ny])
//                     arr[nx][ny]=arr[x][y]+1
//                 }
//         }
//     }
// let day =0;
// for (let i = 0; i < n; i++) { 
//     for(let j=0; j<m; j++){
//         if (arr[i][j] === 0) return -1;
//         day = Math.max(day, arr[i][j]);
//     }

// }
// return day-1
// }


// console.log(solution(m,n,tomato)) 


function sol(m,n,miro){
    let queue = []
    let move =[[0,1],[1,0],[0,-1],[-1,0]]
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(miro[i][j]===1){
                queue.push([i,j])
            }
        }
    }

    while(queue.length){
        let [x,y] = queue.shift()
        for(let k=0; k<4; k++){
            let [nx,ny] = [x+move[k][0], y+move[k][1]]
            if(nx>=0 && nx<n && ny>=0 && ny<m &&miro[nx][ny]===0){
                miro[nx][ny] = miro[x][y]+1
                queue.push([nx,ny])
            }
        }
    }
    let day =0
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(miro[i][j]===0) return day =-1
            day=Math.max(day,miro[i][j]-1)
        }
    }
    return day
}

console.log(sol(m,n,tomato))