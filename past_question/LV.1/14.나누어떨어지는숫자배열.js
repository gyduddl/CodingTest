function solution(arr, divisor) {
    var answer = [];
    for(let e of arr){
        if(e%divisor===0) answer.push(e)
    }
    return answer.length?answer.sort((a,b)=>a-b):[-1];
}