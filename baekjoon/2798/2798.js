const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
//합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [n,m]=input[0].split(' ').map(Number)

let arr = input[1].split(' ').map(Number)

// //배열에서 무작위로 세개만 넣기
// let array2=[]
// let array=[]

// for(let i=0; i<n;i++){
//     for(let j=i+1; j<n;j++){
//         for(let k=j+1;k<n;k++){
//             array.push(arr[i],arr[j],arr[k])
//             array2.push(array)
//             array=[]
//         }
//     }
// }

// let sum = (arr)=>arr.reduce((cdd,cur)=>cdd+cur)

// let array3 =[]
// for(let i=0; i<array2.length; i++){
//     array3.push(sum(array2[i]))
// }

// let num=0
// //array3에서 합이 m을 이하인 것들을 도출
// for(let e of array3){
//     if(e>m) continue
//     if(e>num) num=e
// }

// console.log(num)

//다른 방법(좀더 간편하게 만들 수 있음. 함수 써서)
function blackjack(n,m,arr){
    let count=0
    for(let i=0; i<n;i++){
    for(let j=i+1; j<n;j++){
        for(let k=j+1;k<n;k++){
            let sum = arr[i]+arr[j]+arr[k]
            if(sum>count && sum<=m){
                count=sum
            }
        }
    }
    }
    return count
}

console.log(blackjack(n,m,arr))