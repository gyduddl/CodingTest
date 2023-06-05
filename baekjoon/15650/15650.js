const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
let [n,m] = input[0].split(' ').map(Number); // 4 2

const solution=(n,m)=>{
    let seq=[];
    let visited=[...Array(n+1)].fill(false);
    let result='';
    
    const dfs=(k,s)=>{
        if(k===m){
            result+= `${seq.join(' ')}\n`;
            return
        }
        for(let i=s; i<=n; i++){
            if(visited[i]===false){
                visited[i]=true;
                // if(seq[seq.length-1]>i) continue; -> 디버깅으로 해보깅 
                seq.push(i);
                //이 왜진....? 이해가 잘 안되네...? 
                dfs(seq.length,i);
                seq.pop();
                visited[i]=false;
            }
        }
    }
    dfs(0,1);
    return result;
}


console.log(solution(n,m))