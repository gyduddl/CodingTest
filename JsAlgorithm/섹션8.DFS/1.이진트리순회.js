            function solution(n){
                let answer="";
                const DFS=(v)=>{
                    if(v>7) return;
                    else {
                        DFS(v*2);
                        DFS(v*2+1);
                        answer+=v+" ";
                    }
                }
                DFS(n)
                return answer;
            }

            console.log(solution(1));