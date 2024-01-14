//최소의 칸 수를 출력 -> BFS

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [m,n] = input.shift().split(' ').map(Number)

let miro = []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split('').map(Number))
}

function solution(m,n,miro){
    let answer=0
    let queue =[[0,0,1]]
    let dx = [-1,0,1,0]
    let dy = [0,1,0,-1]
    miro[0][0]=0
    while(queue.length){
        let [x,y,c] = queue.shift()
        if(x===m-1 && y===n-1) return c
        for(let k=0; k<4; k++){
            let nx = x+dx[k]
            let ny = y+dy[k]
            if(nx>=0 && nx<m && ny>=0 && ny<n && miro[nx][ny]===1){
                miro[nx][ny]=0
                queue.push([nx,ny,c+1])
            }
        }
    }
}

console.log(solution(m,n,miro))

