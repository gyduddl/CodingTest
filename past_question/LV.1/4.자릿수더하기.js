function solution(n){
    // split은 문자열일떄만 작동한다.
    let arr=n.toString().split('').map(Number);
    return arr.reduce((acc,cur)=> acc+cur,0);
    
}

//다른 방법
//parseInt -> 숫자로 변환하기 
// curr => 현재 돌고 있는 요소
// n+"" -> 숫자열 문자열로 만들어주기 
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    
}
