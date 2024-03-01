// 5. 이진트리 넓이우선탐색(BFS)

// function solution(){  
//     let answer="";
//     let queue =[]
//     queue.push(1)
//     while(queue.length){
//         let v= queue.shift()
//         answer += v+ ' '
//         for(let nx of [v*2, v*2+1]){
//             if(nx>7) break;
//             queue.push(nx)
//         }
//     }
//     return answer;
// }

function solution(){
    let answer=''
    let queue=[]
    queue.push(1)
    while(queue.length){
        let v =queue.shift()
        answer += (v+' ')
        for(let nx of [v*2, v*2+1]){
            if(nx>7) break
            queue.push(nx)
        }
    }
    return answer
}

console.log(solution()); //1 2 3 4 5 6 7