//방법1
// function solution(s) {
//     let arr= s.split('');
//     let answer=[];
//     for(let i=0; i<s.length;i++){
//         if(!answer.includes(arr[i])) answer.push(arr[i])
//     }
//     var array = new Array(answer.length);
//     array.fill(0)
//     for(let j=0; j<answer.length; j++){
//         for(let i=0; i<s.length;i++){
//             if(answer[j]===arr[i]) array[j]++
//         }
//     }
//     let array2= []
//     for(let x=0; x<array.length; x++){
//         if(array[x]===1) array2.push(answer[x])
//     }
//     return array2.sort().join('');
// }


//방법2
// lastIndexOf = 문자열에서 탐색하는 문자열이 마지막으로 등장하는 위치에 대한 index를 반환
// var stringName = 'coding everybody everywhere';
// console.log(stringName.indexOf('every')); //7
// console.log(stringName.lastIndexOf('every')); //17
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}


console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));

