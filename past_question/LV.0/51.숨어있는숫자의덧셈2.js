//연속된 수는 하나의 숫자로 간주합니다.
//문자열에 자연수가 없는 경우 0을 return 해주세요.
//my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = 0;
    let result =''
    for(let x of my_string){
        answer+=(+result)
        if((+x)!==(+x)){ 
            result =''
        }else result+=x
        // console.log(result)
    }
    return answer;
}
// 1+2+34+1->38
console.log(solution("aAb1B2cC34oOp1"))//37->38
console.log(solution("1a2b3c4d123Z"))//133
console.log(solution("adddd"))//0