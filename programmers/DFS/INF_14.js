//조합구하기

function solution(n, m){         
    let answer=[];
    let tmp = Array.from({length:m},()=>0)
    function DFS(v,s){
        if(v===m){
            answer.push([...tmp])
        }else{
            for(let i =s; i<=n; i++){
                tmp[v]=i;
                DFS(v+1,i+1)
            }
        }
    }
    DFS(0,1)
    return answer;
}

console.log(solution(4, 2));
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4