//후위식연산(postfix) _ 스택

function solution(str){
    let stack =[]
    for(let x of str){
        if(!isNaN(x)) {stack.push(x)}
        else{
            let L = Number(stack.pop())
            let R = Number(stack.pop())
            if(x==='+') stack.push(R+L)
            if(x==='-') stack.push(R-L)
            if(x==='*') stack.push(R*L)
            if(x==='/') stack.push(R/L)
        }

    }
    return stack[0]
}

let str="352+*9-";
console.log(solution(str));