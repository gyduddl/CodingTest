// function solution(emergency) {
//     var answer = [];
//     //arr 코드에서 emergency으로 치면 원본emergency 배열이 바뀌여서 (...)스프레드연자산자를 통해 원본을 복사해두어야 한다.
//     const arr = [...emergency].sort((a,b)=>b-a);
//     for(let j=0; j<arr.length; j++){
//         for(let i=0; i<arr.length; i++){
//             if(emergency[j]===arr[i]) answer.push(i+1)
//         }
//     }
//     return answer;
// }

//다른 방법.map을 활용한 코드 

function solution(emergency) {
    let map= new Map();
    const arr = [...emergency].sort((a,b)=>b-a);
    for(let i=0;i<arr.length; i++){
        map.set(arr[i],i+1)
         console.log(map)

    }
    return emergency.map(e=>map.get(e));
}

console.log(solution([3, 76, 24])) //	[3, 1, 2]
// console.log(solution([1, 2, 3, 4, 5, 6, 7])) //	[7, 6, 5, 4, 3, 2, 1]
// console.log(solution([30, 10, 23, 6, 100])) //	[2, 4, 3, 5, 1]