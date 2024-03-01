// function solution(a,b){
//     let queue =[]
//     for(let i =1; i<=a; i++){
//         queue.push(i)
//     }
//     while(queue.length){
//         if(queue.length===1) break

//         for(let i=1; i<b;i++) queue.push(queue.shift())
//         queue.shift()
//     }
//     return queue[0]
// }


function solution(a,b){
    let stack =[]
    for(let i=1;i<=a;i++){
        stack.push(i)
    }
    while(stack.length){
        if(stack.length===1) break
        for(let i=0; i<b-1;i++) stack.push(stack.shift()) // 2번만 반복
        stack.shift()
    }

    return stack[0]
}

console.log(solution(8, 3));