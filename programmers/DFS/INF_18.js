// 4. 미로 탐색 (너어어무 중요합니다.)
// function solution(board){  
//     let answer=0;
//     let n = board.length;
//     let dx = [-1,0,1,0]
//     let dy = [0,1,0,-1]
//     function dfs(x,y){
//         if(x===n-1 && y===n-1){
//             answer++
//         }
//         for(let k=0; k<4; k++){
//             let nx = x+dx[k]
//             let ny = y + dy[k]
//             if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===0){
//                 board[nx][ny]=1
//                 dfs(nx,ny)
//                 board[nx][ny] =0
//             }
//         }
//     }
//     board[0][0]=1
//     dfs(0,0)
//     return answer;
// }

function solution(board){
    let answer=0;
    let len=board.length 
    let move = [[0,-1],[1,0],[0,1],[-1,0]]
    function dfs(x,y){
        if(x===len-1 && y===len-1){
            answer++
        }else{
            for(let k=0;k<4;k++){
                let [nx,ny] = [x+move[k][0],y+move[k][1]]
                if(nx<0 || nx>=len || ny<0 || ny>=len || board[nx][ny]) continue
                // if(nx>=0 && nx<len && ny>=0 && ny<len && board[nx][ny]===0) {
                    board[nx][ny]=1;
                    dfs(nx,ny)
                    board[nx][ny]=0;
                // }

            }
        }
    }
    board[0][0]=1
    dfs(0,0)
    return answer
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr)); //8 도착지점까지의 가짓수