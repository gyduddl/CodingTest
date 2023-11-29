function solution(n){
    let answer="";
    function DFS(v){
        if(v<1) return 1;
        else{
            answer+= v+ " "
            DFS(v-1)
        }
    }
    DFS(n)
    return answer
}

console.log(solution(3));