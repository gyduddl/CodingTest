const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m] =input.shift().split(' ').map(Number)

let miro = []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split(''))
}

let posB=[],posR=[]
for(let i=0; i<n; i++){
    for(let j=0; j<m;j++){
        if(miro[i][j]==='B') {
            posB=[i,j]
            miro[i][j] ='.'
        }
        if(miro[i][j]==='R') {
            posR=[i,j]
            miro[i][j] ='.'
        }
    }
}



    function bfs(posR, posB){
        const visited={}
        const queue=[]
        let move =[[-1,0],[0,1],[1,0],[0,-1]]
        let cur =[posR.join("."), posB.join('.')].join('_')
        visited[cur]=0;
        queue.push(cur);
        while(queue.length>0){
            cur = queue.shift()
            if(visited[cur]>=10) return -1;
            const [curposR, curposB] = cur.split('_').map(pos=> pos.split('.').map(Number))
            for(let k=0; k<4; k++){
                const rotated = rotate([...curposR], [...curposB], move[k]);
                if(rotated===true){
                    return visited[cur]+1
                }else if(rotated!==false && visited[rotated]===undefined){
                    queue.push(rotated)
                    visited[rotated] = visited[cur]+1
                }
                 }
             }
            return -1
        }


        function rotate(posR, posB, [dx,dy]){
            const move=(pos1, pos2)=>{
                while(miro[pos1[0]+dx][pos1[1]+dy] !== "#"){
                    if(pos2&& pos1[0]+dx ===pos2[0] && pos1[1]+dy === pos2[1]) break;
                    pos1[0]+=dx;
                    pos1[1]+=dy;
                    if(miro[pos1[0]][pos1[1]]==="O") return true
                }
                return false
            }

            if(move(posB,posR)) return false
            if(move(posR,posB)){
                if(move(posB)) return false
                else return true
            }
            if(move(posB,posR)) return false //이걸 한번 더 넣어줘야 하는데 왜....


            return [posR.join("."), posB.join('.')].join('_')
        }

        console.log(bfs(posR, posB))
