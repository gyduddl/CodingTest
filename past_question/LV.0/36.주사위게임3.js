// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.


function solution(a, b, c, d) {
    var answer = 0;
    if(a===b&&a===c&&a===d){
        answer+=1111*a
    }else if(a===b&&d===c){
        //Math.abs 절대값 구하기
        answer=(a+d)*Math.abs(a-d)
    }else if(a===d&b===c){
        answer=(a+b)*Math.abs(a-b)
    }else if(a===c&&d===b){
        answer=(a+d)*Math.abs(a-d)
    }else if(a == b && b == c) {
        answer =  Math.pow((10*a+d),2);
    }else if(a == d && d == c) {
        answer =  Math.pow((10*a+b),2);
    }else if(b == d && d == c) {
        answer = Math.pow((10*d+a),2);
    }else if(a == d && d == b) {
        answer = Math.pow((10*a+c),2);
    }else if( a == b && a != c && a != d && c!=d) {
        answer = c*d;
    }else if( a == c && a != b && a != d && b!=d) {
        answer = b*d;
    }else if( a == d && a != b && a != c && b!=c) {
        answer = b*c;
    }else if( b == c && b != a && b != d && a!=d) {
        answer = a*d;
    }else if( b == d && b != a && b != c && a!=c) {
        answer = a*c;
    }else if( c == d && c != b && c != a && a!=b) {
        answer = a*b;
    }else{
        answer =Math.min(a,b,c,d)
    }
    return answer;
}

console.log(solution(2,2,2,2))
console.log(solution(4,1,4,4))
console.log(solution(6,3,3,6))
console.log(solution(2,5,2,6))
console.log(solution(6,4,2,5))
