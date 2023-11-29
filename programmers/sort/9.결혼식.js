function solution(times){
    let answer=Number.MIN_SAFE_INTEGER;
    let T_line=[];
    for(let x of times){
        T_line.push([x[0],'s']);
        T_line.push([x[1],'e'])
    }
    T_line.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
        else return a[0]-b[0];
    })
    console.log(T_line)
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));