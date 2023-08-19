function solution(price, money, count) {
    var answer = 0;
    let cnt = 0;
    for(let i =1; i<=count; i++){
            cnt += price*i;
    }
    answer=cnt - money;
    return answer;
}

console.log(solution(2,20,4))