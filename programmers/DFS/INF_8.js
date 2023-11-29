// 8. 중복 순열

function solution(n, m){
    let answer =[];
    let tmp = Array.from({length:m},()=>0)
    function DFS(v){
        if(v===m){
            answer.push([...tmp])
        }else{
            for(let i=1; i<n+1; i++){
                tmp[v]=i;
                DFS(v+1)
            }
        }
    }
    DFS(0)
    return answer;
}

console.log(solution(3, 2));
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3