function solution(arr){
    let stack =[];
    let answer =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="("){
            if(arr[i+1]===")"){
                answer+=stack.length
            }else{
                stack.push(arr[i])
            }
        }else{ //)일떄
            if(arr[i-1]!=="("){
                stack.pop()
                answer+=1
            }
        }
    }
    return answer;
}
let a="(((()(()()))(())()))(()())";
console.log(solution(a));