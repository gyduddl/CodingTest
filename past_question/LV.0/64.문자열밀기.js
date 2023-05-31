function solution(A, B) {
    var answer = [...A];
    for(let i=0;i<answer.length;i++){
        if(A===B) return i;
        else {
            answer.unshift(answer.pop());
            if(answer.join('')===B) return i+1
        }
    }
    return -1;
}


function solution(A, B) {
    var answer = [...A];
    for(let i=0;i<answer.length;i++){
        if(A===B) return i;
        else {
            answer.unshift(answer.pop());
            if(answer.join('')===B) return i+1
        }
    }

    const fun=()=>{

    }
    return -1;
}

console.log(solution("hello","lohel"));
console.log(solution("apple","elppa"));
console.log(solution("atat","tata"));
console.log(solution("abc",	"abc"));