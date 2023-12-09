function solution(a,b){
    let queue =[]
    for(let x of b){
        if(a.includes(x)) queue.push(x)
    }
    return queue.join('')===a? "YES":"NO"
}

let a="CBA";
let b="CBDGE";
console.log(solution(a, b));