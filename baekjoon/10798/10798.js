const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');
const maxLength = Math.max(...input.map(i => i.length)); 
// 다른 방식 Math.max.apply(null, words.map(i => i.length));

//**.apply**/
// Math.max() 메소드를 사용하면, arguments로 받은 숫자 값 중에서 가장 큰 값을 뽑아줍니다.
// 하지만, 해당 arguments가 배열로 이루어져 있을 경우에는 바로 값을 뽑을 수 없습니다.
// (NaN 반환) Math.max()의 argument에는 숫자만 들어갈 수 있기 때문인데요, 이때 .apply를 쓰면 이를 해결할 수 있습니다.
// .apply에서는 두 번째 인자로 배열을 받고, 그 배열을 각각의 인자로 배정해서 계산을 가능하게 해줍니다.
//  Math.max 메소드에서는 this 역할이 없기 때문에 첫번째 인자에 들어가는 값은 중요하지 않습니다.

let answer = ''

for(let i=0; i<maxLength; i++){
    for(let j=0; j<input.length; j++){
        // 다른 방식 answer += input[j][i] || "" 
        // 단어들의 최대 길이를 구한 후, 각 단어들을 번갈아가며 순회하면서 한 글자씩 이어 붙인다. 
        // 이 때 maxLength보다 길이가 작은 경우 words[j][i]는 undefined를 반환하는데, 
        // 단축 평가 표현식을 통해 undefined의 경우 false가 되어 논리합 연산자의 뒤에 있는 빈 문자열 ""을 더하게 된다.
        if(input[j][i]===undefined) continue 
        //input[j][i]에 값이 없는 경우 넘어가기
        answer += input[j][i]
    }
}

console.log(answer)
