function solution(my_string, overwrite_string, s) {
    var answer = '';
    let num=overwrite_string.length;
    let num2 = my_string.length;
    let num3= num2-s-num;
    answer+= my_string.slice(0,s)
    answer+=overwrite_string
    if(num3!==0){
        answer+=my_string.slice(num+s)
    }

    return answer;
}