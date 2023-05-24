//0은 모든 수의 배수이다.
//모든 수는 1의 배수이다.
//2의 배수 -> 0 2 4 6(2로 나눴을떄 나머지가 0이이면 2의 배수)
//3의 배수 -> 0 3 6 9


function solution(arr, queries) {
    var answer = [...arr];
    for(let x of queries){
        for(let i=x[0];i<=x[1];i++){
            if(i%x[2]===0){
                answer[i]+=1
            }
        }
    }
    return answer;
}

console.log(solution([0, 1, 2, 4, 3],[[0, 4, 1],[0, 3, 2],[0, 3, 3]]))