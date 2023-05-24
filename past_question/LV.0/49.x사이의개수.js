function solution(myString) {

    return myString.split('x').map(x=>x.length);
}

console.log(solution("oxooxoxxox"))
console.log(solution("xabcxdefxghi"))