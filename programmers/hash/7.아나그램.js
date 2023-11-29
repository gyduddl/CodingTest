// 해쉬

function solution(str1, str2){
    let answer="YES"; 
    let sH= new Map();
    for(let s of str1){
        if(sH.has(s)) sH.set(s, sH.get(s)+1);
        else sH.set(s,1)
    }
    // for(let x of str2){
    //     if(!sH.has(x)) return "No"
    //     else {
    //         sH.set(x,sH.get(x)-1)
    //     }
    // }
    // for(let [key, value] of sH){
    //     if(value>0){
    //         return "No"
    //     }
    // }

    for(let x of str2){
        if(!sH.has(x) || sH.get(x)===0) return "No"
        else sH.set(x, sH.get(x)-1)
    }
    return answer;
}


let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));