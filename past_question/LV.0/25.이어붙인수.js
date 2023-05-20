function solution(num_list) {
    var answer = 0;
    let num1 = ''
    let num2 = ''
    for(let x of num_list){
        if(x%2===0) {num1+= x}
        else {num2+=x}
    }
    answer=Number(num1)+Number(num2)
    return answer;
}

console.log(solution([5, 7, 8, 3]))
console.log(solution([3, 4, 5, 2, 1]))
