function solution(a, b) {
    var answer = 0;
    let str1 = Number([a,b].join(''))
    answer+= Math.max(str1,2*a*b)
    return answer;
}