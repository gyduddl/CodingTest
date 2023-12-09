function solution(a,b){
    let answer =0;
    let stack =[]
    while(b.length){
        let n = b.shift()-1
        for(let i =0; i<a.length; i++){
            if(a[i][n]!==0){
                if(stack[stack.length-1]===a[i][n]){
                    answer+=2;
                    stack.pop()
                }else{
                    stack.push(a[i][n])
                }
                a[i][n]=0
                break //for문을 끝내줌!!

            }
        }
    }

    return answer
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b)); //4