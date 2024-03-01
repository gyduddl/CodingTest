function solution(n,k){
    //1. n에서 1을 뺀다.
    //2. n을 k로 나눈다.
    //1번과 2번을 수행해야하는 최소횟수
    let count =0

    while(n>=k){
        while(n%k!==0){
            n-=1;
            count++
        }
        n/=k;
        count++
    }

    while(n>1){
        n-=1;
        count++
    }

    return count
}

console.log(solution(17,4))