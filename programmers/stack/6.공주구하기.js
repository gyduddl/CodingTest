function solution(a,b){
    let queue =[]
    for(let i =1; i<=a; i++){
        queue.push(i)
    }
    while(queue.length){
        if(queue.length===1) break

        for(let i=1; i<b;i++) queue.push(queue.shift())
        queue.shift()
    }
    return queue[0]
}
console.log(solution(8, 3));