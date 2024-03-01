function solution(n1,n2,n3){ //나중에 다시 풀어봐야 할 것 같다... 이해가 ...
    let queue = []
    let ch =Array.from({length:n1[0]},()=>Array(n1[1]).fill(0))
    queue.push([n2[0],n2[1],n2[2],0])
    let move =[[-1,0],[0,-1],[1,0],[0,1]]
    let count =0;
    while(queue.length){
        let [x,y,d,cnt] = queue.shift()
        console.log(x,y,d,cnt)
        if(!n3[x][y]&& !ch[x][y]){
            ch[x][y]=1
           count++
           return 
        }
        for(let k=0; k<4; k++){
            d= (d+1)%4
            let [nx,ny]= [x+move[d][0], y+move[d][1]]
            if(!n3[nx][ny] && !ch[nx][ny]){ //바다가 아니라면
                ch[nx][ny]=1
                queue.push([nx,ny,d,cnt+1])
            }
            if(k===3){//다 돌았는데
                let dir = (d+2)%4
                let [dnx,dny] = [x+move[dir][0], y+move[dir][1]] //뒤로 빠꾸...
                if(!n3[dnx][dny]&& !ch[nx][ny]){ //벽이 아니라면....
                    ch[dnx][dny]=1
                    queue.push([dnx,dny,dir,cnt+1])
                }
            }
        }
    }
    return count
}
let num1 = [4,4]
let num2 = [1,1,0]
let num3 = [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]] 
console.log(solution(num1,num2,num3))