const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
let [n,m] = input[0].split(' ').map(Number); 

const solution=(n,m)=>{
    let seq=[];
    let visited=[...Array(n)].fill(0);
    let result ='';

    const dfs=(k,s)=>{
        if(k===m){
            result+= `${seq.join(' ')}\n`
            return;
        }
        for(let i=s;i<=n;i++){
            visited[i]=true;
            seq.push(i);
            dfs(seq.length, i);
            seq.pop();
            visited[i]=false
        }
    }
    dfs(0,1);
    return result;
}

console.log(solution(n,m))