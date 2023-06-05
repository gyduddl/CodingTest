function solution(polynomial) {
    var answer = '';
    let arr = polynomial.split(' ');
    let x=arr.filter(a=>a.includes('x')?a:0).map(e=>e.length===1?1:Number(e.slice(0,e.length-1)));
    let sum= x.reduce((acc,cur)=> acc+cur,0);
    let num = arr.filter(i=>(i.includes('x')||i.includes('+'))?0:i).map(Number);
    let numSum = num.reduce((acc,cur)=> acc+cur , 0);
    if(sum===1&&sum>0){
        return numSum===0?`x`: `x + ${numSum}`
    }else if(sum===0){
        return `${numSum}`
    }
    else if(numSum !==0){
        return `${sum}x + ${numSum}` 
    } else return `${sum}x`
}


console.log(solution("3x + 7 + x + 8"));
console.log(solution("x + x + x"));
console.log(solution("x"));
console.log(solution("12"));
console.log(solution("0"));
console.log(solution("x + 1"));



