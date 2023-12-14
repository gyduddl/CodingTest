const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
function sol(input){
    let n = Number(input.shift())

    let [r1,c1,r2,c2] = input.shift().split(' ').map(Number)
    
    let move = [[-2,-1],[-2,1],[0,2],[2,1],[2,-1],[0,-2]]
    
    let board = Array.from({length:n},()=>Array(n).fill(0))
    
    let q = []
    q.push([r1,c1,0])
    
    while(q.length){
        let [x,y,c] = q.shift()
        if(x===r2 && y===c2){
            return c
        }
        for(let k=0; k<6; k++){
            let [nx,ny] = [x+move[k][0], y +move[k][1]]
            if(nx>=0 && nx<n && ny>=0 && ny<n &&board[nx][ny]===0) {
                board[nx][ny]=1

                q.push([nx,ny,c+1])
            }
        }
    }
    return -1
}


console.log(sol(input))