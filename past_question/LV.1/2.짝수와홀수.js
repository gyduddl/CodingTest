//제한
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// num은 int 범위의 정수입니다. -> 음수가 들어갈 수 있다는 말?? 
// 정수는 양수랑 음수를 뜻함. num%2===-1이 나올 수도 있다는 뜻
// 그래서 num%2===1을 조건으로 하면 -1이 들어가지 못하기때문에 틀렸다고 하는 것임

// function solution(num) {
//     if(Math.abs(num)%2===1) return 'Odd'
//     else return 'Even'
// }

// function solution(num) {
//   return num % 2 ? "Odd" : "Even"
// }


function solution(num) {
    if(num%2!==0) return 'Odd'
    else return 'Even'
}