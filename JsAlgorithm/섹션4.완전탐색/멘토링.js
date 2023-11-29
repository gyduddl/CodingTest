function solution(test){
    let n=test.length;
    let m=test[0].length;
    let pair=[]
    for(let i=1; i<=n;i++){
        for(let j=1; j<=n;j++){
            pair.push([i,j])
        }
    }
    console.log(pair)
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
