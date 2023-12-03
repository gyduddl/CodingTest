const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m] = input.shift().split(' ').map(Number)

let miro = []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split('').map(Number))
}
function solution(n,m,miro){
    let check = Array.from({length:n},()=>Array.from({length:m},()=>0))

    let dx =[-1,0,1,0]
    let dy =[0,1,0,-1]
    let queue =[[0,0,0]]
    check[0][0]=1
    while(queue.length){
        let [x,y,cnt] = queue.shift()
        if(x===n-1 && y===m-1)return cnt
    
        for(let k=0; k<4; k++){
            let nx = x + dx[k]
            let ny = y + dy[k]
            if(nx>= 0&& nx<n && ny>=0 && ny<m){
            if(check[nx][ny]) continue
            else check[nx][ny]=1
            if(miro[nx][ny]){ 
                    miro[nx][ny]=0
                    queue.push([nx,ny,cnt+1])
            }else{
                queue.unshift([nx,ny,cnt])
            }
        }
        }
    }
}


console.log(solution(n,m,miro))
