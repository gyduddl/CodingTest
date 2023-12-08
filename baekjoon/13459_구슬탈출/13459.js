//테스트는 다 통과 되었는데 '틀렸다고' 나옴....;;

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m] = input.shift().split(' ').map(Number)

let miro =[]

for(let i=0; i<n; i++){
        miro.push(input[i].split(''))
}

let R=[],B=[];

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if(miro[i][j]==="B"){
            B=[i,j]
            miro[i][j]='.'
        }
        else if(miro[i][j]==="R"){
            R=[i,j]
            miro[i][j]='.'
        }
    }
}



function dfs(R,B){
    let queue =[]
    let dx = [-1,0,1,0]
    let dy =[0,1,0,-1]
    let visited={}
    let cur = [R.join('.'),B.join('.')].join("_");
    visited[cur] =0;
    queue.push(cur)
    while(queue.length>0){
        cur = queue.shift()
    if(visited[cur]>=10) return 0
        let [posR, posB] = cur.split('_').map(pos => pos.split('.').map(Number))
        for(let k=0; k<4; k++){
            let rotated = rotate([...posR], [...posB], dx[k], dy[k])
            if(rotated ===true) return 1
            if(rotated!==false && visited[rotated]===undefined){
                queue.push(rotated)
                visited[rotated] = 1;

            }
        }
    }
    return 0;
}

function rotate(posR, posB, x, y){
    const move=(pos1, pos2)=>{
        while(miro[pos1[0]+x][pos1[1]+y]!=="#"){
            if(pos2 && pos1[0]+x===pos2[0] && pos1[1]+y===pos2[1]) break;
            pos1[0]+=x;
            pos1[1]+=y;
            if(miro[pos1[0]][pos1[1]]==='O') return true
        }
        return false
    }
    if(move(posB,posR)) return false
    if(move(posR, posB)){
        if(move(posB)) return false
        else return true
    }
    if(move(posB,posR)) return false

    return [posR.join('.'),posB.join('.')].join("_");
}   

console.log(dfs(R,B))