//10진수를 2진수로 변환 -> 나머지가 1이나 0일때 끝내야 함 
function solution(n){

    let answer="";
    function DFS(v){
        if(v===0) return;
        else{
            DFS(parseInt(v/2))
            answer += (v%2)
        }
    }
    DFS(n)
    return answer;
}

console.log(solution(11)); //1011