function solution(n) {
    // 왜 틀린거지...?-> 정렬문제가 아니고 뒤집기 문제이기에 틀린 것이다. 
    // return [...(n+'')].map(Number).sort((a,b)=>b-a);
    return [...(n+'')].map(Number).reverse();
    
}