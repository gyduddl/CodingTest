function solution(maps) {
    var answer = 0;
    let dx = [-1,0,1,0]
    let dy = [0,1,0,-1]
    let n = maps.length, m= maps[0].length
    let queue =[]
    queue.push([0,0,1])
    maps[0][0]=0
    while(queue.length){
        let [x,y,c] = queue.shift()
        if(x===n-1 && y===m-1) return c
        for(let k=0;k<4; k++){
            let nx = x + dx[k]
            let ny = y + dy[k]
            if(nx>=0 && nx<n && ny>=0 && ny<m && maps[nx][ny]===1){
                maps[nx][ny]=0
                queue.push([nx,ny,c+1])
                // maps[nx][ny]=1 -> BFS는 방문여부를 하고 풀어줄 필요없다. 함수가 도는 것이 아니니깐 다시 돌아오지 않기 때문에!!
            }
        }
    }
    return -1;
}