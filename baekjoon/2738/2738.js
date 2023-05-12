const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\r\n')
.map(x=>x.trim()// 공백을 제거하는 함수가 trim() 함수
.split(' ').map(x=>+x)) //+연산자를 사용하여 문자열을 숫자열로 변경

let [n,m]=input.shift();
let arr = new Array(m);//행이 m개짜리인 배열 생성
arr.fill(0) //사실 이거 필요 없음
let array= [];
for(let i=0;i<n;i++){
  //열이 n개 짜리인 배열 생성
  array.push([...arr])
   // 그냥 arr이 아니라 ...arr하는것도 [...arr]하는 것도 모르겠음. [arr]해도 들어감
   //[arr]만 해주면 [ [ [ 0, 0, 0 ] ], [ [ 0, 0, 0 ] ], [ [ 0, 0, 0 ] ] ]이런식으로 들어감
   //[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ] 이런식으로 해주려면 [...arr]으로 넣어줘야함
   // 나중에 사람들에게 물어보기
}

for(let i=0; i<n; i++){ // 세로
  for(let j=0;j<m;j++){
    array[i][j]= input[i][j]+input[i+n][j]  
  }
} 

let answer=''
for(let i=0; i<n; i++){ // 세로
  for(let j=0;j<m;j++){
     answer += array[i][j].toString()+" "
  }
  //j반복(2차 배열안의 원소)가 끝나면 줄바꿈을 해줌
  answer+="\n"
} 

console.log(arr, array)

// 4 4 4
// 6 6 6
// 5 6 100

