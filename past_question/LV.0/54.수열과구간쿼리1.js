function solution(arr, queries) {
    var answer = [...arr];
    const fun =(s,e)=>{
        for(let j=s; j<=e;j++){
            answer[j]++
        }
    }
    for(let i =0; i<queries.length; i++){
        fun(queries[i][0],queries[i][1])
    }

    return answer;
}

console.log(solution([0, 1, 2, 3, 4],[[0, 1],[1, 2],[2, 3]]))