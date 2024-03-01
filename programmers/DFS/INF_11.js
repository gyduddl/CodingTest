// 11. 팩토리얼 -> 다시 글로 표시하기

// function solution(n){         
//     let answer;
//     function DFS(v){
//         if(v===1) return 1;
//         else{
//              return answer= v*DFS(v-1) 
//         }
//     }
//     DFS(n)
//     return answer;
// }

function solution(n){
    let answer;
    function dfs(v){
        if(v===1) return 1
        else return answer=v*dfs(v-1)
    }
    dfs(n)
    return answer
}

console.log(solution(5)); //120