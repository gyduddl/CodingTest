function solution(n){
// 모두 0으로 바꾸는 수, 모두 1로 바꾸는 수 중에서 최소가 되는 것을 고르면 되는 것
let str = ''
for(let i=0; i<n.length; i++){
    if(n[i]!==n[i+1]) str+=n[i]
}
let zero=0;
let one =0;
for(let x of str){
    if(x==='0') zero+=1
    else one+=1
}
return Math.min(zero, one)
}
console.log(solution('00101010'))