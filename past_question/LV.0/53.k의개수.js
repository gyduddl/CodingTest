function solution(i, j, k) {
    var answer = 0;
    for(let e=i;e<=j;e++){
       let arr= e.toString().split('');
    for(let x=0; x<arr.length; x++){
        if(arr[x]===k.toString()) answer++
    }
        arr=[]
    }
    return answer;
}

console.log(solution(1,13,1))