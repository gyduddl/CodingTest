// 8. 중복 순열

// function solution(n, m){
//     let answer =[];
//     let tmp = Array.from({length:m},()=>0)
//     function DFS(v){
//         if(v===m){
//             answer.push([...tmp])
//         }else{
//             for(let i=1; i<n+1; i++){
//                 tmp[v]=i;
//                 DFS(v+1)
//             }
//         }
//     }
//     DFS(0)
//     return answer;
// }

function solution(n, r) {
    let answer = [];
    let path = Array.from({ length: r }, () => 0);
    function dfs(v) {
        if (v === r) {
            answer.push(path.join(' '));
        } else {
            for (let i = 1; i <= n; i++) {
                path[v] = i;
                dfs(v + 1);
            }
        }
    }
    dfs(0);
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
