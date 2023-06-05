// function solution(n) {
//     var answer = [];
//     for(let i=1;i<n; i++){
//         if(n%i===1) answer.push(i)
//     }
//     return answer.sort((a,b)=>a-b)[0];
// 

// function solution(n) {
//     for(let i=1;i<n; i++){
//         if(n%i===1) return i
//     }
// }

function solution(n,x=1) {
    while(x++){
        if(n%x===1) return x
    }
}