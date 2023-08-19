// let answer = ['z','b','c','d','e','f','g']
//s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
let answer = "Zbcdefg";
let str1=answer.split('').filter(e=>e.toLowerCase()===e).sort().reverse().join('')
let str2=answer.split('').filter(e=>e.toUpperCase()===e).sort().reverse().join('')
console.log(answer.split('').sort().reverse().join('')) // 굳이 대문자 소문자 안나눠줘도 된다. 