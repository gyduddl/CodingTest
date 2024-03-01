function solution(n){
    let str =[]
    let num =[]
    for(let x of n){
        if(isNaN(x)) str.push(x)
        else num.push(Number(x))
    }
    let sum =num.reduce((acc,cur)=>acc+cur,0)
   
    
    return str.sort().join('') + sum
}

console.log(solution('AJKDLSI412K4JSJ9D'))