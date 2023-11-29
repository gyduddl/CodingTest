function solution (c, arr) {
    // let answer = 0;
    let answer = Number.MIN_SAFE_INTEGER
    const DFS =(n,sum)=>{
        if(sum>c) return
        if(n===arr.length){
            answer = Math.max(answer,sum)
        }
        // if(n===arr.length){
        //     if(sum<c){
        //         if(sum>answer){
        //             answer= sum;
        //         }
        //     }
        // }
        else{
            DFS(n+1,sum+arr[n])
            DFS(n+1,sum)
        }

    }
    DFS(0,0)
    return answer;
}


let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));