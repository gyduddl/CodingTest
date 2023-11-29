//two pointers 알고리즘

function solution(m, arr){
    let answer=0, it=0, sum=0; // it(왼쪽) , rt (오른쪽)
    for(let rt =0; rt<arr.length; rt++){
        sum += arr[rt]; 
        if(sum>m){
            sum -= arr[it++];
        }
        if(sum===m) answer ++;
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a)); //3 연속부분수열의 합이 특정숫자 M이 되는 경우
