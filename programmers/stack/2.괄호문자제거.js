function solution(s){  
    let answer;
    let stack =[];
    for(let x of s){
        if(x===")") {
            while(stack.pop()!=="("); // (가 아니라면 stack.pop()을 계속 해준다. 
        }else{
            stack.push(x)
        }
    }
    answer = stack.join('')
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));