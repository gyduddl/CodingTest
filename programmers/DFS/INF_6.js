// //6. 바둑이 승차 -> 트럭에 태울 수 있는 최고의 무게
// function solution(c, arr){
//     let answer=Number.MIN_SAFE_INTEGER;
//     let n = arr.length;
//     function DFS(v,s){
//         if(s>c) return
//         if(v===n){
//             if(c>=s){
//                 answer =Math.max(s, answer)
//             }
//         }else{
//             DFS(v+1, s+arr[v])
//             DFS(v+1, s)
//         }
//     }
//     DFS(0,0)
//     return answer;
// }



function solution(num,arr){
    let len = arr.length
    let answer =0
    function dfs(v,s){
        if(s>num) return
        if(v===len){
            if(s<=num){
                answer = Math.max(answer,s)
            }
        }else{
            dfs(v+1, s+arr[v])
            dfs(v+1, s)
        }
    }
    dfs(0,0)
    return answer
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr)); //242 -> 가장 무거운 무게