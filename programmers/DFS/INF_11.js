// 11. 팩토리얼 -> 다시 글로 표시하기

function solution(n){         
    let answer;
    function DFS(v){
        if(v===1) return 1;
        else{
             return answer= v*DFS(v-1) 
        }
    }
    DFS(n)
    return answer;
}

console.log(solution(5)); //120