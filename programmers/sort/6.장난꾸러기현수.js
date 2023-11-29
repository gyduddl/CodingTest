//뒤에 있는 index의 배열의 크기가 작으면 현수, 앞의 배열의 크기가 크면 짝꿍
function solution(arr){
    let answer=[];
    let sortArr= [...arr].sort((a,b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(sortArr[i]!==arr[i]) answer.push(i+1)
    }
    return answer;
}

let arr=[120, 130, 150, 150, 130 ,150];
console.log(solution(arr));