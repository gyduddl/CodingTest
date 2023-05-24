//약수의 개수가 3개 이상인 숫자를 합성수라고 한다. 
//약수 : 어떤 정수를 나머지 없이 나눌 수 있는 정수
// 4-> 1 2 4

function solution(n) {
    var answer = 0;
    let count =0
    for(let i=0;i<=n;i++){
        count=0
        for(let j=1;j<=i;j++){
            if(i%j===0){
                count++
            }
        }
        if(3<=count) answer++
    }
    return answer;
}


console.log(solution(10))
console.log(solution(15))
