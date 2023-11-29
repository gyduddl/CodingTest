//7. 최대 점수 구하기\

function solution(m, ps, pt){         
    let answer=Number.MIN_SAFE_INTEGER;
    let n = ps.length
    function DFS(v,s,t){
        if(t>m) return
        if(v===n){
            answer = Math.max(answer, s)
        }else{
            DFS(v+1, s+ps[v], t+pt[v])
            DFS(v+1, s, t)
        }
    }
    DFS(0,0,0)
    return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt)); //41