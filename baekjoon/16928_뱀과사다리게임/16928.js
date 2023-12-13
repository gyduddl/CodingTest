const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m] = input[0].split(' ').map(Number)

let board = new Array(101).fill(null).map((_,idx)=>idx)

for(let i=1; i<=n+m; i++){
    let [from, to] = input[i].split(' ').map(Number)
    board[from] = to
}

let visited= new Array(101).fill(-1)

let q= []
q.push(1)
visited[1] = 0
while(q.length){
    let c = q.shift()

    for(let i=1; i<=6; i++){
        let next = c + i
        if(next>100) continue
        next = board[next] //// 해당칸에 뱀이나 사다리가 있다면 이용해야만 한다.
        if(visited[next]===-1){
            visited[next] = visited[c]+1
            q.push(next)
        }
    }
}


console.log(visited[100])