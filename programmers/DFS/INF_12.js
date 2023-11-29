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
    let answer =0
    let dy = Array.from(Array(11),()=>Array(11).fill(0))
    function combi(i,j){
        if(dy[i][j]!==0) return dy[i][j]
        if(i===j || j===0) return 1
        else return dy[i][j]=combi(i-1,j-1)+combi(i-1,j)
    }
    answer=combi(n,r)
    return answer;
}

console.log(solution(5,3)); //10