// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

function solution(a, b, c, d) {
    var answer = 0;
    // switch(4){
    //     case (a===b&&a===c&&a===d&&b===c&&c===d):
    //         answer=1111*a;
    //         break;
    //     case
    // }

    return (a===b&&a===c&&a===d&&b===c&&c===d);
}

console.log(solution(2,2,2,2))
console.log(solution(4,1,4,4))
console.log(solution(6,3,3,6))
console.log(solution(2,5,2,6))
console.log(solution(6,4,2,5))
