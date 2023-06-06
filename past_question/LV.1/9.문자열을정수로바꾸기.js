//방법1
function solution(s) {
    return Number(s);
}

//방법2
//string 에다가 *,/ 라든가 나누게 되면 자동적으로 자바스크립트에서 str 을 num 으로 인식
function solution(s) {
    return s/1;
}

//방법3
function solution(s) {
    return +s;
}