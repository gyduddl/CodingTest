// function solution(arr) {
//     let answer = []
//     let count = 0;
//     while(count < arr.length){
//     answer.push(arr)
//     arr = arr.map((e) =>
//     e >= 50 && e % 2 === 0 ? e / 2 :
//     e < 50 && e % 2 !== 0 ? (e*2)+ 1 :
//     e )
//     count++
//     }
    
//     return count-1;
//     }

function solution(arr) {
    let count = 0;
    let answer=[...arr];
    const fun=(answer)=>{
        for(let i of answer){
            if(i>=50&& i % 2 !== 0||i<50&&i%2===0){
                return count
            }
        }
        count++
        for(let e of answer){
            if(e>=50&& e%2===0){//50보다 크거나 같은 짝수
               e=e/2
            }else if(e < 50 && e % 2 !== 0){ //50보다 작은 홀수
               e=(e*2)+ 1
            }
        }

        fun(answer)
    }
    return fun(answer)
    }

console.log(solution([1, 2, 3, 100, 99, 98]))