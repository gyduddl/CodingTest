// function solution(q, r, code) {
//     var answer = '';
//     for(let i=0; i<code.length; i++){
//         if(i%q===r) answer+=code[i]
//     }
//     return answer;
// }

function solution(q, r, code) {
    var answer = '';
    [...code].map((a,i)=> i%q===r?answer+=a:answer)
    return answer;
}

console.log(solution(3,1,"qjnwezgrpirldywt"))