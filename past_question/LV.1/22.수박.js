function solution(n) {
    return n%2===1?'수박'.repeat(parseInt(n/2))+'수':'수박'.repeat(parseInt(n/2));
}

//방법 2
function solution(n){
    return '수박'.repeat(n/2)+(n%2===1?'수':'')
}

//'수박'.repeat(2.5) -> ' 수박수박'