// 3.경로탐색(인접리스트)
// => 시간복잡도가 줄어든다.
// => 노드 개수가 많을때 사용하는 방법

// function solution(n, arr){
//     let answer=0;
//     let graph = Array.from(Array(n+1),()=>Array())
//     let ch = Array.from({length:n+1},()=>0);
//     for(let [a,b] of arr){
//         graph[a].push(b)
//     }
//     function DFS(v){
//         if(v===n){
//             answer++
//         }else{
//             for(let nx of graph[v]){
//                 if(ch[nx]===0){
//                     ch[nx]=1;
//                     DFS(nx);
//                     ch[nx]=0
//                 }
//             }
//         }
//     }
//     ch[1]=1
//     DFS(1)
//     return answer;
// }

function solution(n, arr) {
    let graph = new Map();
    let ch = new Set();
    let answer = 0;
    for (let [a, b] of arr) {
        if (!graph.has(a)) graph.set(a, []);
        graph.get(a).push(b);
    }
    function dfs(v) {
        if (v === n) {
            answer++;
        } else {
            for (let nx of graph.get(v)) {
                if (!ch.has(nx)) {
                    ch.add(nx);
                    dfs(nx);
                    ch.delete(nx);
                }
            }
        }
    }
    ch.add(1);
    dfs(1);
    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
