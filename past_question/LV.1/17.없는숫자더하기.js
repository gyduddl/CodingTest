//방법 1 
function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer+=i
    }
    return answer
}

//방법2
function solution(numbers) {   
    return 45- numbers.reduce((acc,cur)=>acc+cur,0)
}