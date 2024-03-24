// 7. 섬나라 아일랜드(DFS)

// function solution(board){
//     let answer=0;
//     let dx =[-1,-1,0,1,1,1,0,-1]
//     let dy =[0,1,1,1,0,-1,-1,-1]
//     let n = board.length;
//     function DFS(x,y){

//             for(let k=0; k<8; k++){
//                 let nx = x+dx[k];
//                 let ny = y+dy[k];
//                 if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
//                     board[nx][ny]=0;
//                     DFS(nx,ny)
//             }
//         }
//     }

//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             if(board[i][j]===1){
//                 answer++
//                 board[i][j]=0
//                 DFS(i,j)
//             }
//         }
//     }
//     return answer;
// }

function solution(arr) {
    let n = arr.length;
    let answer = 0;
    let move = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
    ];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === 1) {
                answer++;
                arr[i][j] = 0;
                dfs(i, j);
            }
        }
    }
    function dfs(x, y) {
        for (let k = 0; k < 8; k++) {
            let [nx, ny] = [x + move[k][0], y + move[k][1]];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
                arr[nx][ny] = 0;
                dfs(nx, ny);
            }
        }
    }
    return answer;
}

let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
