function solution(m,arr){
    let answer=[];
    n=arr.length;
    let ch=Array.from({length:n}, ()=>0);
    let tmp=Array.from({length:m}, ()=>0);;
    function DFS(L){
        if(L===m){
            answer.push(tmp.slice()); //얕은 복사 -> 깊은 복사
        }
        // {key : answer, value : flfl} // 얕은복사(ket, value) 
        else{
            for(let i=0; i<n; i++){
                console.log(i)
                if(ch[i]===0){
                    ch[i]=1;
                    tmp[L]=arr[i];
                    DFS(L+1);
                    ch[i]=0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}

let arr=[3, 6, 9];
console.log(solution(2, arr));