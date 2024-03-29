function solution(n) {
    var answer = Array.from({length:n},()=>Array(n).fill(0));
    let move = [[0,1],[1,0],[0,-1],[-1,0]];
    let len = n*n
    function dfs(x,y,d,num){
        answer[x][y]=num;

        if(num===len) return
        else{

            let [nx,ny] = [x+move[d][0],y+move[d][1]]
            if(nx < 0 || ny < 0 || nx >= n || ny >= n|| answer[nx][ny]!==0){
                d=(d+1)%4;
                [nx,ny] = [x+move[d][0],y+move[d][1]]
                 dfs(nx,ny,d,num+1)
            }else dfs(nx,ny,d,num+1)
        }
    }
    dfs(0,0,0,1)
    return answer;
}


console.log(solution(4))