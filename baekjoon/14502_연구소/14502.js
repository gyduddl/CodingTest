//이 문제 진짜 너무 좋은듯??

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m] = input.shift().split(' ').map(Number)

let miro=[]
for(let i=0; i<input.length;i++){
    miro.push(input[i].split(' ').map(Number))
}

let ans =0

function countBFS(arr){
    let queue =[]
    let dx = [-1,0,1,0]
    let dy = [0,1,0,-1]
    for(let i=0; i<n; i++){
        for(let j=0; j<m;j++){
            if(arr[i][j]===2){
                queue.push([i,j])
            }
        }
    } 
    while(queue.length){
        let [x,y] = queue.shift()
        for(let k=0; k<4; k++){
            let [nx,ny] =[x+dx[k], y+dy[k]]
            if(nx>=0 && nx<n && ny>=0 && ny<m && arr[nx][ny]===0){
                arr[nx][ny]=2
                queue.push([nx,ny])
            }
        }
    }
    let cnt=0;

    for(let i=0; i<n; i++){
        for(let j=0; j<m;j++){
            if(arr[i][j]===0){
                cnt++
            }
        }
    } 

    return cnt
}

function dfs(v){
    if(v===3){
        //2차원배열을 깊은복사하여 넘겨줘야 원본배열(board)가 변하지 않는다
        let arr =  miro.map( pos => [...pos])

        let count = countBFS(arr)

        ans = Math.max(ans, count)
        return
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m;j++){
            if(miro[i][j]===0){
                miro[i][j] = 1;
                dfs(v+1)
                miro[i][j] = 0;
            }
        }
    }
}

dfs(0)
console.log(ans)
