function solution(num) {
    var answer = 0;
    const fun=(num)=>{
        if(answer===500) return answer=-1;
        if(num===1) return;
        if(num%2===0){
            num=num/2;
            answer++
        } 
            
        else {
            num=num*3+1;
            answer++
        }
        fun(num)
    }
    fun(num)
    return answer;
}