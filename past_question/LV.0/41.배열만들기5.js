function solution(intStrs, k, s, l) {
    var answer = [];
    let result=[]
    for(let x of intStrs){
        result =Number(x.split('').splice(s,l).join(''))
        if(result>k){
            answer.push(result)
        }
    }
    return answer;
}

console.log(solution(["0123456789","9876543210","9999999999999"],50000,5,5))