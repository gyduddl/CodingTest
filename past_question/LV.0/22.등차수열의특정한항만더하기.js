function solution(a, d, included) {
    var answer = 0;
    let arr=[a]
    let num=a
    for(let i=0; i<included.length; i++){
        num+=d
        arr.push(num)
        if(included[i]) answer+=arr[i]
    }
    return answer;
}

console.log(solution(3,4,[true,false,false,true,true]))