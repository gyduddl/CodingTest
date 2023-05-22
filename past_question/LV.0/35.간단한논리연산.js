function solution(x1, x2, x3, x4) {
    let isTrue= (x1||x2);
    let isTrue2= x3||x4;
    return (isTrue&&isTrue2);
}

console.log(solution(false,true,true,true))