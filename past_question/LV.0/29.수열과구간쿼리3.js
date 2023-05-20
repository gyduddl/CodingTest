function solution(arr, queries) {
    var answer = [...arr];
    // for(let i=0; i<queries.length; i++){
        // let box = answer[queries[i][0]]
        // answer[queries[i][0]]=answer[queries[i][1]];
        // answer[queries[i][1]]=answer[queries[i][0]];
        //뒤에 세미콜론을 붙여줘야 돌아감
        [answer[0],answer[3]]=[answer[3],answer[0]]; //[ 0, 1, 2, 3, 4 ] //[ 3, 1, 2, 0, 4 ]
    // }
    return answer;
}

console.log(solution([0, 1, 2, 3, 4],[[0, 3],[1, 2],[1, 4]]	))

// let arr=[1,2];

// [arr[0],arr[1]]=[arr[1],arr[0]];

// console.log(arr)