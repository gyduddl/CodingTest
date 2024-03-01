// function solution(a,b){
//     let queue =[]
//     for(let x of b){
//         if(a.includes(x)) queue.push(x)
//     }
//     return queue.join('')===a? "YES":"NO"
// }


function solution(a,b){
    let stack =[]
    for(let x of b){
        if(a.includes(x)){
            stack.push(x)
        }
    }
    return stack.join('')===a?"YES":"NO"
}


let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));