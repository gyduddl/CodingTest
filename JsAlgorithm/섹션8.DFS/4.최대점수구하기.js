function solution(m, ps, pt){
    let answer = Number.MIN_SAFE_INTEGER;
    const DFS=(n,sum,cnt)=>{
        if(cnt>m) return
        if(n===ps.length){
            answer= Math.max(answer,sum)
        }else{
            DFS(n+1, sum+ps[n], cnt+pt[n])
            DFS(n+1, sum, cnt)
        }
    }
    DFS(0,0,0);
    return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));