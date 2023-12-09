const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m] = input.shift().split(' ').map(Number)

let [r,c,d] =input.shift().split(' ').map(Number)

let miro = []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split(' ').map(Number))
}

let visited = Array.from({length:n},()=>Array(m).fill(0))

let move =[[-1,0],[0,1],[1,0],[0,-1]]

let ans =0;
let cnt =0;

while(1){
    if(cnt ===4){
        let [cosx,cosy]=[r+move[(d+6)%4][0], c+move[(d+6)%4][1]]
        if(miro[cosx][cosy]===1) break;
        else {
            r=cosx
            c=cosy
            cnt=0
        }
    }
    if(!visited[r][c]){
        visited[r][c]=1;
        miro[r][c]=2
        ans++
    }
    const [x, y] = [r+move[(d+3)%4][0], c+move[(d+3)%4][1]]
    if(miro[x][y]===0){
        r=x
        c=y
        cnt=0
    }else{
        cnt++
    }
    d=(d+3)%4
}

console.log(ans)


