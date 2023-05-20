function solution(num_list) {
    var answer = 0;
    let num =num_list.reduce((a,b)=>a+b)
    let num2 =num_list.reduce((a,b)=>a*b)
    if((num*num)>num2) return answer+=1
    return answer;
}

console.log(solution([5, 7, 8, 3]))