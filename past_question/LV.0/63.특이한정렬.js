//정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
//이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 

function solution(numlist, n) {
    var answer = [];
    // let arr = new Map(numlist.reverse());
    // let arr2 = arr.map((a)=> Math.abs(a-n));
    let map = new Map();
    numlist.reverse();
    let arr = [...numlist].map((a)=>Math.abs(a-n));
    for(let i =0; i<arr.length; i++){
        map.set(numlist[i],arr[i]);
        // console.log(map) //{ 6 => 2, 5 => 1, 4 => 0, 3 => 1, 2 => 2, 1 => 3 }
    }
    let arr2=map.values().sort((a,b)=>a-b)
    return arr2;
}

console.log(solution([1, 2, 3, 4, 5, 6],4));
console.log(solution([10000,20,36,47,40,6,10,7000],30));