function solution(x, n) {
    var answer = [x];
    function fun(x){
        if(answer.length===n) return;
        answer.push(answer[answer.length-1]+x)
        fun(x)
    }
    fun(x)
    return answer
}