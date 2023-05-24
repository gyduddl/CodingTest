//차집합으로 진행할까?? 
function solution(my_string) {
    var answer = new Set([...my_string])

    return [...answer].join('');
}

console.log(solution("people"))
