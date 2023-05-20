function solution(control) {
    let answer=''
    for(let i=0; i<control.length; i++){
        let num = control[i+1]-control[i]
        switch(num){
            case 1:answer+='w';break
            case -1:answer+='s';break
            case 10:answer+='d';break
            case -10:answer+='a';break
        }
    }


    return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]))