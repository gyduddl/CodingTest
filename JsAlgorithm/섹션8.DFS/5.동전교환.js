function solution(m, arr){
    let answer = Number.MAX_SAFE_INTEGER
    const DFS=(v,n)=>{
        if(n>m) return;
        if(v>=answer) return
        if(n===m){
            answer=Math.min(answer,v)
        }else{
            for(let i=0; i<arr.length;i++){
                DFS(v+1,n+arr[i])
            }
        }
    }
    DFS(0,0);
    return answer;
}   

let arr=[1, 2, 5];
console.log(solution(15, arr));