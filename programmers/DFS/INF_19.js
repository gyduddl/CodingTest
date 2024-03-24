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

function solution() {
    let queue = [1];
    let set = new Set();
    while (queue.length) {
        let current = queue.shift();
        if (current >= 8) return;
        console.log(current);
        for (let nx of [current * 2, current * 2 + 1]) {
            if (!set.has(nx)) {
                set.add(nx);
                queue.push(nx);
            }
        }
    }
}

console.log(solution()); //1 2 3 4 5 6 7
