function solution (rectangle, characterX, characterY, itemX, itemY){
    let answer = 0
    let graph = Array.from(Array(103),()=>Array(103).fill(0))
    let doubleRec = rectangle.map((x)=>x.map(y=>y*2))
    for(let map of doubleRec){
        let [x1,y1,x2,y2] =map
        for(let i = x1; i<=x2; i++){
        for(let j=y1; j<=y2; j++){ 
            if(i===x1 || i===x2 || j===y1 || j===y2){ // 테두리라면
                if(graph[i][j]===0)graph[i][j]=1
            }else{//테두리가 아니라면
                graph[i][j]=2
            }
            
        }
        }
    }
    let dx =[-1,0,1,0]
    let dy =[0,1,0,-1]
    let queue = []
    queue.push([characterX*2, characterY*2,1])
    graph[characterX*2][characterY*2]
    while(queue.length){
        let [x,y,cnt]=queue.shift()
        if(x===itemX*2 && y===itemY*2){ 
            return parseInt(cnt/2)
        }
        for(let k=0; k<4;k++){
            let nx = x + dx[k]
            let ny = y + dy[k]
            if(nx>=0 && nx<51 && ny>=0 && ny<51 && graph[nx][ny]===1){
                queue.push([nx,ny,cnt+1])
                graph[nx][ny]=0
            }
        }
    }
return 0
}

console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]],1,3,7,8))