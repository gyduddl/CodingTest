function solution(number) {
    // return number.split('').map(Number).reduce((a,b)=>a+b)%9
    return Number(number)%9
}

console.log(solution("123"))
console.log(solution("78720646226947352489"))

