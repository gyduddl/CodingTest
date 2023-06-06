function solution(n) {
    var answer = 0;
    //만약 n이 1이면 조건에 성립하는데 n이 i보다 크다고 조건을 작성하면
    //1을 포함하지 못하기에 i가 n보다 작거나 같다고 조건을 설정해주어야 한다. 
    for(let i=1; i<=n;i++){
        if(i*i===n) return answer=(i+1)**2;
        else answer=-1;
    }
    return answer;
}