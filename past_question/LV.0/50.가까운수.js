

function solution(array, n) {
    //가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
    let sortArr = array.sort()
    let arr = sortArr.map(x=>Math.abs(x-n))
    // 그냥 Math.min(arr)을 입력하면 arr이 배열이기에 NaN이 나온다. 
    // 스프레드 연산자(...)를 사용하여 arr배열의 요소를 분해해서 넣어야 답이 나온다. 
    return sortArr[arr.indexOf(Math.min(...arr))];
}

console.log(solution([3, 28,12],20))//28
console.log(solution([10, 11, 12],13))//12