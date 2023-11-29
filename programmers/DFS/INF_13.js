//13. 수열 추측하기

function solution(n, f){         
    let answer,flag=0;
    let dy= Array.from(Array(11),()=>Array(11).fill(0));
    let ch = Array.from({length:n+1},()=>0)
    let b =Array.from({length:n},()=>0) 
    let p = Array.from({length:n},()=>0)
    function combi(n,r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;
        else{
            return dy[n][r] = combi(n-1,r-1)+combi(n-1,r)
        }
    }
    for(let i=0; i<n;i++){
        b[i] = combi(n-1,i)
    }
    function DFS(v,s){
        if(flag) return
        if(v===n && s===f){
            answer = p.slice()
            flag=1
        }else{
            for(let i=1;i<=n;i++){
                if(ch[i]===0){
                    ch[i]=1;
                    p[v]=i
                    DFS(v+1, s+b[v]*p[v])
                    ch[i]=0
                }
            }
        }
    }
    DFS(0,0)
    return answer;
}

console.log(solution(4, 16)); //3 1 2 4