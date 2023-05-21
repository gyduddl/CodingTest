// 첫 번째 쿼리의 범위에는 0, 1, 2, 4, 3이 있으며 이 중 2보다 크면서 가장 작은 값은 3입니다.
// 두 번째 쿼리의 범위에는 0, 1, 2, 4가 있으며 이 중 2보다 크면서 가장 작은 값은 4입니다.
// 세 번째 쿼리의 범위에는 0, 1, 2가 있으며 여기에는 2보다 큰 값이 없습니다.
// 따라서 [3, 4, -1]을 return 합니다.

function solution(arr, queries) {
    var answer = [];
    for(let [s,e,k] of queries){
        //v->요소값, i-> 순회하는 인덱스
        //작은것부터 나열해준다음 제일 작은 0번쨰 인덱스를 temp에 넣어줌
        let temp = arr.filter((v,i)=>(i>=s&&i<=e&&v>k)).sort((a,b)=>a-b)[0]
        //temp가 존재하면 temp값을 없으면 -1값을 answer에 넣어준다. 
        answer.push(temp?temp:-1)
    }

    return answer;
}

console.log(solution([0, 1, 2, 4, 3],[[0, 4, 2],[0, 3, 2],[0, 2, 2]]))