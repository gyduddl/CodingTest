// stack

function solution(arr){
    let answer = 'YES'
    let stack =[]
    for(let x of arr){
        if(x==="("){
            stack.push(x)
        }else{
            if(stack.length===0) return "NO"
            stack.pop()
        }
    }//(의 개수가 더 많은 경우 stack.length가 참인경우
    if(stack.length) return "NO"
    return answer
}

let a="(())(()";
console.log(solution(a));