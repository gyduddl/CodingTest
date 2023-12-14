const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let n = Number(input.shift())

let ans =[]

function bfs(start, end){
    let queue =[]
    let visited = Array.from({length:10000},()=>0)
    queue.push([start, ''])
    visited[start] = 1
    while(queue.length){
        let [cur, path] = queue.shift();

        if(cur===end){
            ans.push(path)
            return
        }

        const D = (cur*2)%10000
        if(visited[D]===0){
            visited[D]=1
            queue.push([D, path+"D"])
        }

        const S = cur===0?9999:cur-1
        if(visited[S]===0){
            visited[S]=1
            queue.push([S, path+"S"])
        }

        const L = (cur % 1000) * 10 + Math.floor(cur / 1000);
        if(visited[L]===0){
            visited[L]=1
            queue.push([L, path+"L"])
        }

        const R = (cur % 10) * 1000 + Math.floor(cur / 10);
        if(visited[R]===0){
            visited[R]=1
            queue.push([R, path+"R"])
        }
    }
}

for(let i =0; i<n; i++){
    let [start, end] = input[i].split(' ').map(Number)
    bfs(start, end)
}

console.log(ans.join('\n'))

