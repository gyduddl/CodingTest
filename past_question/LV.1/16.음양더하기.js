// 방법1
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

// 방법2
function solution(absolutes, signs) {
    var answer = [...absolutes];
    for(let i=0; i<signs.length; i++){
        if(!signs[i]) answer[i]=(-answer[i]);
    }
    return answer.reduce((acc,cur)=> acc+cur,0);
}