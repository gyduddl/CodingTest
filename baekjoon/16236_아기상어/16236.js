const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let n = Number(input.shift())

let board=[]

for(let i =0; i<input.length; i++){
    board.push(input[i].split(' ').map(Number))
}
let queue =[]

for(let i=0; i<n; i++){
    for(let j =0; j<n; j++){
        if(board[i][j]===9){
            queue.push([i,j])
        }
    }
}
let shark = 2;
let time =0,size=0
while(queue.length){
    let [x,y] = queue.shift()
    if(size===shark) shark++
    let move = [[0,-1],[-1,0],[0,1],[1,0]]
    let cnt =0
    size=0;
    for(let k=0; k<4; k++){
        let [nx,ny] = [x+move[k][0], y+move[k][1]]

        if(nx<0 || nx>=n || ny<0 || ny>=n || board[nx][ny]>shark) continue
        cnt++ 

        if(board[nx][ny]<shark){

            queue.push([nx,ny])
            board[nx][ny]=0
            size++
            time= time+cnt
        }
    }
}

console.log(time)