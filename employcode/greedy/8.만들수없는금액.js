// function solution(arr){
//     let result =0;
//     let sum = arr.reduce((acc,cur)=>acc+cur,0)
//     let count =Number.MAX_SAFE_INTEGER;

//     function dfs(v,s){
//         if(v===arr.length){
//             for(let i=1; i<sum; i++){
//                 if(s!==i){
//                     count=Math.min(count,i)
//                 }
//             }
//         }else{
//             dfs(v+1, s+arr[v])
//             dfs(v+1,s)
//         }
//     }

//     dfs(0,0)

//     return count
// }

function solution(arr){
    arr.sort((a,b)=>a-b)
    console.log(arr)
    let result =1;
    let len = arr.length
    for(let i=0; i<len; i++){
        if(result<arr[i]){
            break
        }
        result+=arr[i]
    }

    return result
}

console.log(solution([3,2,1,1,9]))