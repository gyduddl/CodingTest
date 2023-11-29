function solution(arr){
    let answer=[];
    // for(let i=0; i<arr.length-1; i++){
    //     for(let j=0; j<arr.length-i-1; j++){
    //         if(arr[j]>0&&arr[j+1]<0){ //각 숫자의 순서는 바뀌면 안되니깐 
    //             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    //         }
    //     }
    // }
    for(let s of arr){
        if(s<0) answer.push(s)
    }
    for(let s of arr){
        if(s>0) answer.push(s)
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));