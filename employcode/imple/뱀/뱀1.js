const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let n =Number(input.shift())

let apple = Number(input.shift())
let appleP=[]
for(let i=0; i<apple; i++){
    appleP.push(input.shift().split(' ').map(Number))
}

let snake = Number(input.shift())
let snakeP=[]
for(let i=0; i<snake; i++){
    snakeP.push(input.shift().split(' ').map(x=>{
        return isNaN(x)?x:+x
    }))
}

let board = Array.from({length:n},()=>Array(n).fill(0))

for(let x of appleP){
    board[x[0]-1][x[1]-1] = 2
}

let queue = [[0,0,0]]
let move = [[0,1],[1,0],[0,-1],[-1,0]]
let dir =0
let count =0
let sn =[[0,0]]

while(queue.length){
    let [x,y,cnt] = queue[0]//머리
    for(let x of snakeP){
        if(cnt===x[0]){
            if(x[1]==="D") dir = (dir+1)%4
            else if(x[1]==="L") dir =(dir+3)%4
        }
    }

    let [nx,ny]= [x+move[dir][0],y+move[dir][1]]
    if(nx<0||nx>=n||ny<0||ny>=n||board[nx][ny]===1){
        count=cnt+1
        break
    }else{
        queue.unshift([nx,ny,cnt+1])
        // sn.push([nx,ny])
        if(board[nx][ny]===2){
            board[nx][ny]=1
        }else if(board[nx][ny]===0){
            let [sx,sy]=queue.pop()
            board[nx][ny]=1;
            board[sx][sy]=0;
        }
    }

}

console.log(count)