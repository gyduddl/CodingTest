function solution(s){
    let answer=0;
    let stack = []; 
    for(let i=0; i<s.length; i++){
        if(s[i]==="(") stack.push('(');
        else{ // )이라는 뜻 
            stack.pop();
            if(s[i-1]==="("){ //레이저라는 뜻
                answer+=stack.length;
            }else{ //막대기의 마지막
                answer++
            }
        }
    }
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));