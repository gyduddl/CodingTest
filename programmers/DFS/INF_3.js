//3. 이진트리 순회

function solution (n) {
    let answer = ""
    function DFS(v){
        if(v>7) return
        else{
            DFS(v*2)

            DFS(v*2+1)
            answer+=v+ ' '

        }
    }
    DFS(n)
    return answer
}

console.log(solution(1)) 
//1 2 4 5 3 6 7
//4 2 5 1 6 3 7
//4 5 2 6 7 3 1