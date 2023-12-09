// function solution(arr){
//     let stack =[]
//     let strarr1= []
//     for(let x of arr){
//         if(!stack.length && x!=="(") strarr1.push(x)
//         if(x==='('){
//             stack.push(x)
//         }else if(x===')'){
//             stack.pop()
//         }
//     }
//     return strarr1.join('')
// }

function solution(arr){
    let stack =[]
    for(let x of arr){
        if(x===')'){
            while(stack.pop()!=='(');
        }else{
            stack.push(x)
        }
    }
    return stack.join('')
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));