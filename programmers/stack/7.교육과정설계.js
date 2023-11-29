function solution(need, plan){
    let answer="YES";
    let queue = need.split('');
    for(let s of plan){
        if(queue.includes(s)){
            if(s!==queue.shift()) return "No"
        }
    }
    if(queue.length>0) return "No"
    return answer;
}

let a="CBA";
let b="CBDGAE";
console.log(solution(a, b));