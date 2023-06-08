function solution(arr) {
    var answer = [...arr];
    answer.sort((a,b)=>b-a).pop();
    //이렇게 하면 런타임 에러가 나는 이유
    //아래처럼 쓰면 answer에 작은수를 제거한 배열이 담기는것이 아닌
    // 제거한 작은수가 담긴다. 
    // var answer = [...arr].sort((a,b)=>b-a).pop();
    let arr2=arr.filter(el=>answer.includes(el))
    return arr2.length?arr2:[-1];
}

//방법2
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length?arr:[-1]
}