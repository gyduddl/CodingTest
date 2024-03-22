//조합구하기

// function solution(n, m){
//     let answer=[];
//     let tmp = Array.from({length:m},()=>0)
//     function DFS(v,s){
//         if(v===m){
//             answer.push([...tmp])
//         }else{
//             for(let i =s; i<=n; i++){
//                 tmp[v]=i;
//                 DFS(v+1,i+1)
//             }
//         }
//     }
//     DFS(0,1)
//     return answer;
// }

function solution(n, r) {
    let answer = [];
    let path = Array.from({ length: r }, () => 0);
    let visited = Array.from({ length: n }, () => 0);
    function dfs(v, s) {
        if (v === r) {
            answer.push(path.join(' '));
        } else {
            for (let i = s; i <= n; i++) {
                if (!visited[i]) {
                    visited[i] = 1;
                    path[v] = i;
                    dfs(v + 1, i);
                    visited[i] = 0;
                }
            }
        }
    }
    dfs(0, 1);
    return answer;
}

console.log(solution(4, 2)); //한개도 겹치지 않는 조합을 만들어 준다.
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4
