// function solution(arr){
//     let stack =[];
//     let answer =0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==="("){
//             if(arr[i+1]===")"){
//                 answer+=stack.length
//             }else{
//                 stack.push(arr[i])
//             }
//         }else{ //)일떄
//             if(arr[i-1]!=="("){
//                 stack.pop()
//                 answer+=1
//             }
//         }
//     }
//     return answer;
// }


function solution(n){
    let stack =[]
    let num =0;
    for(let i=0; i<n.length; i++){
        if(n[i]==="("){
            if(n[i+1]===")"){//레이저라는 뜻
                num +=stack.length
            }else{
                stack.push(n[i])
            }
        }else{ //)일때
            if(n[i-1]!=="("){ 
                stack.pop()
                num+=1
            }
           
        }
    }
    return num
}


let a="()(((()())(())()))(())";
console.log(solution(a)); //잘려진 조각의 총 개수 24 ->17
// ) => 레이져냐 아님 막대기가 끝난 건가...