//12. 조합수(메모이제이션)

// function solution(n, r){         
//     let answer=[];
//     let dy =Array.from(Array(35),()=>Array(35).fill(0))
//     function DFS(n,r){
//         if(dy[n][r]>0) return dy[n][r]
//         if(n===r || r===0) return 1
//         else return dy[n][r]=DFS(n-1,r-1)+DFS(n-1,r)
//     }
//     answer=DFS(n,r)
//     return answer;
// }

function solution(n,r){
    let dy = Array.from({length:35},()=>Array(35).fill(0))
    function dfs(n,r){
        if(dy[n][r]>0) return dy[n][r]
        if(n===r||r===0) return 1
        else return dy[n][r] = dfs(n-1,r-1)+dfs(n-1,r)
    }
    return dfs(n,r)
}

console.log(solution(5,3)); //10