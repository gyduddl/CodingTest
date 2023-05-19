function solution(a, b) {
    var answer = 0;
    let str1 =''.concat(a,b)
    let str2=''.concat(b,a)
    
    answer+= Math.max(Number(str1),Number(str2))
    return answer;
}