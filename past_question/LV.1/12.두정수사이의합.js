// function solution(a, b) {
//     var answer = 0;
//     let arr =[a,b]
//     let [c,e]=arr.sort((a,b)=> a-b)
//     for(let i =c; i<=e; i++){
//         answer+=i
//     }
//     return answer;
// }


//다른방법
// function solution(a,b){
//     return (a+b)*(Math.abs(a-b)+1)/2
// }

//다른 방법 
function solution(a,b,s=0){
    for(let i =Math.min(a,b); i<=Math.max(a,b); i++) s+=i;
    return s
}