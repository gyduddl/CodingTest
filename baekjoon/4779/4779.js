//재귀함수로 진행
//칸토어 집합

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n').map(Number);

//방법 1
// const recursion = number => {
//     if (number === 1) return "-";//1
//     const result = recursion(number / 3);//3
//     return result + " ".repeat(number / 3) + result;//2
//   };
  
//   input.forEach(num => console.log(recursion(3 ** num)));


//방법 2
const getCantor = (str, count, target) =>
  count === target
    ? str

    //padEnd() 현재 문자열에 인수로 지정된 길이만큼 지정 문자로 채워 새로운 문자열로 반환한다.
    // string.padEnd(newLength[, padString])
    // newLength: 원하는 새로운 문자열의 길이를 지정한다. 현재 문자열 길이 이하의 값으로 설정하면 문자열을 그대로 반환한다.
    // padString:  채워넣을 문자를 지정한다.
    // str.padEnd(10, "!") //Hi!!!!!!!!

    //' '.padEnd(str.length, " ")-> 현재 문자열 길이 이하의 값으로 설정하면 문자열을 그대로 반환한다.
    : getCantor(str + ' '.padEnd(str.length, " ") + str, count + 1, target);

const answer = input.map((n) => getCantor("-", 0, n)).join("\n");
console.log(answer);
