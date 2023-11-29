// two pointers 알고리즘

function solution(m, arr){
    let answer=0, it=0, sum=0;
    for(let rt=0; rt< arr.length; rt++){
        sum += arr[rt]; 
        while(sum>m){
            sum-=arr[it++];
        }
        answer+= (rt-it+1); 
        
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a)); //10

// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, 
// {1, 3, 1}로 총 10가지입니다.