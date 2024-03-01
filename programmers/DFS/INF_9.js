//9. 동전교환(동전의 최소개수를 출력)
// 값을 더했는데 S가 m보다 크다면 그 전에걸로 해줘야 하니깐 리턴 
// L이 answer보다 크거나 같으면 할 필요가 없으니깐 리턴

// function solution(m, arr){
//     let answer=Number.MAX_SAFE_INTEGER;
//     function DFS(v,s){
//         if(s>m) return
//         if(answer<=v) return
//         if(s===m){
//             answer = Math.min(answer, v)
//         }else{
//             for(let i=0; i<arr.length; i++){
//                 DFS(v+1, s+arr[i])
//             }
//         }
//     }
//     DFS(0,0)
//     return answer;
// }

function solution(m,arr){
    let answer = Number.MAX_SAFE_INTEGER
    function dfs(v,s){
        if(v>=answer) return
        if(s>m) return
        if(s===m){
            answer=Math.min(answer,v)
        }else{
            for(let i=0; i<arr.length; i++){
                dfs(v+1, s+arr[i])
            }
        }
    }
    dfs(0,0)
    return answer
}

let arr=[1, 2, 5];
console.log(solution(15, arr));//3