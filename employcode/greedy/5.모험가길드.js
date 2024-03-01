function solution(arr){
    arr.sort((a,b)=>a-b)
    let count =0;
    let result=0;
    for(let i=0; i<arr.length;i++){
        count +=1
        if(count>=arr[i]){
            //'현재 포함되어 있는 모험가의 수'가 '현재 확인하고 있는 공포도'보다 크거나 같다면
            // 그룹이 하나 형성된 것이다. 
            count=0;
            result+=1
        }
    }
    return result
}

console.log(solution([3,2,1,1,9]))