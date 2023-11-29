function solution(tickets) {
    // 정렬해야지....
    tickets.sort()
    var answer = [];
    let len = tickets.length
    let vis= Array(len).fill(false)
    function DFS(cur, cnt, path){
        if(cnt===len && answer.length===0){ ////처음 오는 값을 정렬로 하기 위해서 answer.length가 0일때만 넣을 수 있도록 설정
            answer=path
        }else{
            for(let i=0; i<len; i++){
                if(!vis[i] && tickets[i][0]===cur){
                    vis[i]= true
                    DFS(tickets[i][1], cnt+1, [...path, tickets[i][1]])
                    vis[i]=false
                }
            }
        }
    }
    DFS("ICN",0,["ICN"])
    return answer;
}