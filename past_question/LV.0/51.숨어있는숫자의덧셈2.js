//연속된 수는 하나의 숫자로 간주합니다.
//문자열에 자연수가 없는 경우 0을 return 해주세요.
//my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = 0;
    let result =''
    for(let x=0; x<=my_string.length;x++){
        if((+my_string[x])!==(+my_string[x])){ //NaN===NaN 
        answer+=(+result)
            result =''
        }else result+=my_string[x]
    }
    return answer;
}

console.log(solution("1aAb1B2cC34oOp1"))
console.log(solution("1a2b3c4d123Z4"))
console.log(solution("adddd"))