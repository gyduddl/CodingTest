// function solution(a,b){
//     let answer =0;
//     let stack =[]
//     while(b.length){
//         let n = b.shift()-1
//         for(let i =0; i<a.length; i++){
//             if(a[i][n]!==0){
//                 if(stack[stack.length-1]===a[i][n]){
//                     answer+=2;
//                     stack.pop()
//                 }else{
//                     stack.push(a[i][n])
//                 }
//                 a[i][n]=0
//                 break //for문을 끝내줌!!

//             }
//         }
//     }

//     return answer
// }



function solution(a,b){
    let stack =[]
    let num =0
    let len = a.length
    for(let row of b){
        for(let i=0; i<len;i++){
            if(a[i][row-1]!==0){
                let toy = a[i][row-1]
                if(stack[stack.length-1]===toy){
                    stack.pop()
                    num+=2
                }else{
                    stack.push(toy)
                }
                a[i][row-1]=0
                break
            }
        }
    }
    return num
}



let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b)); //4