//삽입정렬 응용

// function solution(size, arr){
//     let answer=Array.from({length:size},()=>0);
//     arr.forEach(x=>{
//         let pos =-1;
//         for(let i=0; i<answer.length; i++){
//             if(x===answer[i]) pos = i;
//         }
//         if(pos===-1){
//             for(let j=size-1;j>=0; j--){
//                 answer[j]=answer[j-1];
//             }
//         }else{
//             for(let j=pos;j>=1;j--){
//                 answer[j]=answer[j-1]
//             }
//         }
//         answer[0]=x
//     })

//     return answer;
// }

// let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr)); //7 5 3 2 6

function solution(size, arr){
    let answer=[];
    arr.forEach(x=>{
        let pos =-1;
        for(let i =0; i<answer.length;i++) if(x===answer[i]) pos=i;
        if(pos===-1){
            answer.unshift(x);
            if(answer.length>size) answer.pop()
        }else{
            answer.splice(pos,1);
            answer.unshift(x);
        }
    })
    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); //7 5 3 2 6