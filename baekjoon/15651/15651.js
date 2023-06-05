const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
let [n,m] = input[0].split(' ').map(Number); //3(n) 1(m)

const solution=(n,m)=>{
    let seq=[];
    let visited=[...Array(n)].fill(0);
    let result='';
    const dfs=(k)=>{
        if(k===m){
            result+=`${seq.join(' ')}\n`;
            return
        }
        for(let i=1; i<=n;i++){
            // if(!visited[i]){
                visited[i]=true;
                seq.push(i);
                dfs(k+1);
                seq.pop()

                visited[i]=false;
            // }
        }
    }
    dfs(0);
    return result;
}

console.log(solution(n,m))