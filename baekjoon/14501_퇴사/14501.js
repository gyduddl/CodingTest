const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let n = Number(input.shift())

let miro = []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split(' ').map(Number))
}


let ans= 0;
function dfs(v,s){
    if(v>n) return
    if(v===n){
        ans=Math.max(ans,s)
        return
    }else{
            dfs(v+miro[v][0], s+miro[v][1])
            dfs(v+1, s)
    }

}

dfs(0,0)

console.log(ans)