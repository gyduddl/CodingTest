function solution(n){
//00:00:00 - 5:59:59
let answer =0;
    for(let i=0;i<n+1;i++){
        for(let j=0; j<60; j++){
            for(let k=0; k<60; k++){
                let str = String(i)+String(j)+String(k)
                if(str.includes('3')) answer++
            }
        }
    }
    return answer
}

console.log(solution(5))