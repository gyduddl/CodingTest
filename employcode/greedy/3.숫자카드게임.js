function solution(n,m,arr){
    let answer =[]
    for(let x of arr){
        let num = Number.MAX_SAFE_INTEGER
        for(let y of x){
            num=Math.min(y,num)
        }
        answer.push(num)
    }
    return Math.max(...answer)
}

let arr =[[3,1,2],[4,1,4],[2,2,2]]

let arr2=[[7,3,1,8],[3,3,3,4]]

console.log(solution(3,3,arr2))