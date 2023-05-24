//sort 문자 정렬도 가능하다!!

function solution(my_string) {
    var answer = '';
    for(let i=0;i<my_string.length;i++){
        //만약 대문자랑 같다면?
        if(my_string[i]=== my_string[i].toUpperCase()){
            answer+=my_string[i].toLowerCase()
        }else{
            answer+=my_string[i]
        }
    }
    return answer.split('').sort().join('');
}

console.log(solution("Bcad"))
console.log(solution("heLLo"))
console.log(solution("Python"))
