function solution(n){
    let answer=[];
    let ch =Array.from({length:n+1},()=>0);
    const DFS =(V)=>{
        if(V===n+1){ // V가 4일때 출력하도록
            let tmp = '';
            for(let i=1; i<=n; i++){
                // ch에서 1인 것들만 적히도록 설정
                if(ch[i]===1) tmp += (i + " ")
            }
            if(tmp.length>0) answer.push(tmp.trim()); // 공집합은 추가 안되도록 설정
        }
        else{
            ch[V] =1;
            DFS(V+1);
            ch[V]=0;
            DFS(V+1)
        }
    }
    DFS(1)
    return answer;
}

console.log(solution(3));