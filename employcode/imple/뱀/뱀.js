const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let n = Number(input.shift())
let apple = input.shift()
let appleP = []
for(let i=0; i<Number(apple); i++){
    appleP.push(input.shift().split(' ').map(Number))
}
let snake = input.shift()
let snakeP =[]
for(let i=0; i<Number(snake); i++){
    snakeP.push(input.shift().split(' ').map(x=>
        isNaN(x)?x:+x
        ))
}
// 벽 또는 자기자신의 몸과 부딪히면 게임 over

let board = Array.from({length:n},()=>Array(n).fill(0))

for(let x of appleP){
    board[x[0]-1][x[1]-1] = 2
}

let move = [[0,1],[1,0],[0,-1],[-1,0]]

let queue = [[0,0,0,0]]
let sq =[[0,0]]
let count=0
// let dir =0;
while(1){
    // let [x,y,cnt]= queue[queue.length-1]  //뱀의 머리
    // pop이나 shift가 안되는 이유...아....queue에서 없어지면 안되기에...꼬리로 남아있어야 하니깐...
    //뱀의 꼬리가 필요가 없어졌으니.......
    let [x,y,cnt,dir] = queue.pop()

    for(let x of snakeP){
        if(cnt===x[0]){
            if(x[1]==="L") dir=(dir+3)%4
            else if(x[1]==="D") dir=(dir+1)%4
        }
    }
    // count++

    let [nx,ny]=  [x+move[dir][0], y+move[dir][1]]
    if(nx<0 || nx>=n || ny<0 || ny>=n || board[nx][ny]===1){
        count= cnt+1
        break
    }
    else{
        queue.push([nx,ny,cnt+1,dir])
        sq.push([nx,ny])
        if(board[nx][ny]===2){
            board[nx][ny]=1
        }else if(board[nx][ny]===0){
            // let [sx,sy]=queue.shift()
            let [sx,sy] = sq.shift()
            board[nx][ny]=1
            board[sx][sy]=0
        }
        
    }
}


console.log(count)