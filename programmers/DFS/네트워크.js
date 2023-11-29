function solution(n, computers) {
    var answer = 0;
    let visited = [false]
    function DFS(v){
        visited[v] = true // 방문해주고
        for(let i=0; i<computers[v].length; i++){
            if(!visited[i] && computers[v][i]===1){
                DFS(i)
            }
        }
    }
    for(let i =0; i<computers.length; i++){
        if(!visited[i]){//만약 방문을 하지 않았다면?
            DFS(i)
            answer++//방문을 하고 answer값을 넣어준다.
        }
    }
    return answer;
}

function solution(n, computers) {
    var answer = 0;
    let ch = Array.from({length:computers.length},()=>false)
    let queue=[0]
    for(let i=0; i<computers.length; i++){
        if(!ch[i]){ //아직 방문을 안했다면
            answer++
            queue.push(i)
            ch[i]=true
            while(queue.length){
                let v = queue.shift()
                ch[v]=true
                for(let j=0; j<computers[v].length;j++){
                    if(!ch[j] && computers[v][j]===1){
                        queue.push(j)
                    }
                }
            }
        }
    }
    return answer;
}