//다른 사람 풀이 보고 다시 풀기

function solution(s) {
    var answer = '';
    if(s.length%2===1){
        answer += s[parseInt(s.length/2)]
    }else{
        answer+=(s[s.length/2-1]+s[s.length/2])
    }
    return answer;
}