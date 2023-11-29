// 해쉬

function solution(s){  
    let answer;
    let sH= new Map();
    for(let x of s){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x,1)
    }
    let num =0;
    for(let [key, value] of sH){
        if(value>num){
            num = value;
            answer=key
        } 
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));