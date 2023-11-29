//이분검색 = 시간복잡도가 o(logn)번만에 결과값이 나오도록 짧게 설정하는 방법

function solution(target, arr){
    let answer;
    arr.sort((a,b)=>a-b);
    let it=0, rt=arr.length-1;
    let mid = parseInt((it+rt)/2);
    while(it<=rt){ //중요
        if(arr[mid]===target) {
            answer=mid+1;
            break; // 답을 찾았으면 반복문에서 빠져나가야한다.(중요!)무한 반복에 들어갈수도!
        }
        else if(arr[mid]>target) mid=mid-1;
        else mid =mid+1
    }

   
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));