// 7. 섬나라 아일랜드(BFS)

// function solution(board){  
//     let answer=0;
//     let dx =[-1,-1,0,1,1,1,0,-1]
//     let dy =[0,1,1,1,0,-1,-1,-1]
//     let queue =[];
//     let n= board.length;
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n;j++){
//             if(board[i][j]===1){
//                 board[i][j]=0
//                 answer++;
//                 queue.push([i,j])
//                 while(queue.length){
//                     let v = queue.shift()
//                     for(let k=0; k<8; k++){
//                         let nx = v[0]+dx[k];
//                         let ny = v[1]+dy[k];
//                         if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
//                             board[nx][ny]=0;
//                             queue.push([nx,ny])
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return answer;
// }

function solution(board){
    let answer =0;
    let dx = [-1,-1,0,1,1,1,0,-1]
    let dy = [0,1,1,1,0,-1,-1,-1]
    let len = board.length
    let queue=[[0,0]]
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(board[i][j]===1){
                board[i][j]=0;
                queue.push([i,j])
                answer++
                while(queue.length){
                    let [x,y] = queue.shift()
                    for(let k=0; k<8; k++){
                        let nx = x+dx[k]
                        let ny = y+dy[k]
                        if(nx>=0 && nx<len && ny>=0 && ny<len && board[nx][ny]===1){
                            board[nx][ny]=0
                            queue.push([nx,ny])
                        }
                    }
                }

            }
        }
    }
    return answer
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr)); //5