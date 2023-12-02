// 2차원 토마토

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [m,n]=input[0].split(' ').map(Number)

let tomato = []

for(let i=1; i<input.length; i++){
    tomato.push(input[i].split(' ').map(Number))
}

function solution(m,n,arr){
    let dx= [-1,0,1,0]
    let dy = [0,1,0,-1]
    let queue = []
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(arr[i][j]===1){
                queue.push([i,j])

            }
        }
    }
    let head =0;

    while(queue.length>head){
        let [x,y] = queue[head++]
            for(let k=0; k<4; k++){
                let nx = x+ dx[k]
                let ny= y+dy[k]
                if(nx>=0 && nx<n && ny>=0 && ny<m && arr[nx][ny]===0){
                    queue.push([nx,ny])
                    arr[nx][ny]=arr[x][y]+1
                }
        }
    }
    for (let i = 0; i < n; i++) { 
        for(let j=0; j<m; j++){
        let day =0;
            // if (arr[i][j] === 0) return -1;
            // day = Math.max(day, arr[i][j]);
            return arr[i][j]===0? -1 : Math.max(day, arr[i][j]-1);
        }
}
}


console.log(solution(m,n,tomato)) 
