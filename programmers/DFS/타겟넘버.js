function solution(numbers, target) {
    var answer = 0;
    let len = numbers.length;
    function DFS(v,s){
        if(v===len){
            if(s===target){
                answer++
            }
        }else{
            DFS(v+1,s+numbers[v])
            DFS(v+1,s-numbers[v])
        }
    }
    DFS(0,0)
    return answer;
}