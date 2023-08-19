function solution(number, limit, power) {
    var answer = 0;
    let cnt = 0;
    let arr=[];
    for(let i=1; i<=number; i++){
        cnt=0
        for(let j=1; j<=i;j++){
            if(i%j===0) cnt++
        }
        arr.push(cnt)
    }
    for(let el of arr){
        if(el>limit) answer=answer+power;
        else answer= answer+el;
    }
    return answer;
}

console.log(solution(5,3,2)) //[1, 2, 2, 3, 2]
console.log(solution(10,3,2)) //[1, 2, 2, 3, 2, 4, 2, 4, 3, 4]
