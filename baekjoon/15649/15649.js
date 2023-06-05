const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
let [n,m] = input[0].split(' ').map(Number); //3(n) 1(m)

const solution=(n,m)=> {
    const seq = [];
    const visited = [...Array(n+1)].fill(false);//[ false, false, false ]
    let result = "";
    
  const dfs=(num)=>{
    if(num===m) {
        result+= `${seq.join(' ')}\n`;
        return
    }
    for(let i=1; i<=n; i++){
        // visited[i]가 false인것 아직 방문하지 않앗으면
        if(visited[i]===false){
            //방문하고 방문했으니 true로 바꿔준다.
            visited[i]=true;
            seq.push(i);
            dfs(num+1);
            // seq.pop을 넣어주지 않으면 [1,2],[1,3]이렇게 뽑고 싶은데 [1,2,3]이렇게 되기에 [1,2]일떄 2를 pop으로 제거하고 [1]로 만들어준후
            // for을 다시 돌려주여 [1,3]이 되도록 만들어 준다. 
            seq.pop();
            visited[i]=false
        }
    }
  }
  dfs(0)
    return result;
}

console.log(solution(n,m));