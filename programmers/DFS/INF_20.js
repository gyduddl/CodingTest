// 6. 송아지 찾기(BFS) -> 방문 여부를 다시 풀 필요 없을 경우 BFS를 사용하면 된다. 

// function solution(s, e){  
//     let answer = 0;
//     let ch = Array.from({length:10001},()=>0)
//     let graph = Array.from({length:10001},()=>0)
//     let queue=[s]
//     ch[s]=1
//     while(queue.length){
//         let v = queue.shift()
//         for(let nv of [v+1, v-1, v+5]){
//             if(nv ===e) return graph[v]+1
//             if(nv>=0 && nv<10001 && ch[nv]===0){
//                 ch[nv] =1
//                 graph[nv] = graph[v]+1
//                 queue.push(nv)
//             }
//         }
//     }

//     return answer;
// }

function solution(s, e){
    let answer =0;
    let ch = Array.from({length:10001},()=>0)
    let graph = Array.from({length:10001},()=>0)
    function dfs(v){
        if(v===e) return graph[v]
        for(let nx of [v+1,v-1,v+5]){
            if(nx===e) return graph[v]+1
            if(ch[nx]===0){
                ch[nx]=1
                graph[nx] = graph[v]+1
                dfs(nx)
            }
        }
    }
    dfs(s)
    return answer;
}

console.log(solution(5,14));//3