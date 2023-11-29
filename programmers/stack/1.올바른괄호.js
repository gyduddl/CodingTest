// stack

function solution(s){
    let answer="YES";
    let stack =[]
    for(let x of s){
        if(x==="(") stack.push("(")
        else {
            if(stack.length===0) stack.push(')'); //)의 개수가 많은 경우
            else stack.pop();}
    }
    if(stack.length>0) return "No" // (의 개수가 많은 경우
    
    return answer;
}

let a="(())(())";
console.log(solution(a));