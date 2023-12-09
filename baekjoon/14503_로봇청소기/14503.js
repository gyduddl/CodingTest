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

// #1
// let ans =0;
// let cnt =0;

// while(1){
//     if(cnt ===4){
//         let [cosx,cosy]=[r+move[(d+6)%4][0], c+move[(d+6)%4][1]]
//         if(miro[cosx][cosy]===1) break;
//         else {
//             r=cosx
//             c=cosy
//             cnt=0
//         }
//     }
//     if(!visited[r][c]){
//         visited[r][c]=1;
//         miro[r][c]=2
//         ans++
//     }
//     const [x, y] = [r+move[(d+3)%4][0], c+move[(d+3)%4][1]]
//     if(miro[x][y]===0){
//         r=x
//         c=y
//         cnt=0
//     }else{
//         cnt++
//     }
//     d=(d+3)%4
// }

// console.log(ans)



//#2
let queue= [[r,c,d]]
const position = (num)=>(num<0?num+move.length:num)
let count =0;

while(queue.length){
    let [x,y,dir] = queue.shift()
    
    if(!miro[x][y] &&!visited[x][y]){
        visited[x][y]=1;
        count++;
    }

    for(let k=0; k<4; k++){
        // dir = position(--dir)
        dir = (dir+3)%4
        let [nx,ny] = [x+move[dir][0],y+move[dir][1]]
        if(!miro[nx][ny] && !visited[nx][ny]){ //벽이 아니라면
            queue.push([nx,ny,dir])
            break
        }
        if(k===3){
            // let backdir = position(dir-2)
            let backdir = (dir+6)%4
            let [bx,by] = [x+move[backdir][0],y+move[backdir][1]]
            if(!miro[bx][by]){
                queue.push([bx,by,dir])
                break
            }

        }
    }
}

console.log(count)

