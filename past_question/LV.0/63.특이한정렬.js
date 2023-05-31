//정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
//이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 

//sort() -> 배열을 리턴
// sort((a,b)=> a-b) -> 오름차순(작은 것부터 나열)
// sort((a,b)=> b-a) -> 내림차순(큰 것부터 나열) //[5,1,3, 6]
// sort 함수가 리턴하는 값이 0보다 작을 경우, a가 b보다 앞에 오도록 정렬. 5-1 = 4 => 0보다 크니깐
// sort 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬.  1,5 이렇게 정렬해준다. 
function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        const [aNum, bNum] = [Math.abs(a-n),Math.abs(b-n)]
        //거기가 같다면 큰 수를 위로 나열
        if(aNum===bNum) return b-a
        //다르다면 오름차순
        return aNum-bNum
    }
    )
}


//다른 방법
function solution(numlist, n) {
    // a와 b가 거리가 같으면 Math.abs(a - n) - Math.abs(b - n)가 0이 되니 
    // 단축평가 논리합(||)을 사용해 0이 되었을때 b-a가 실행되도록 설정한다. 
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}


console.log(solution([1, 2, 3, 4, 5, 6],4));
console.log(solution([10000,20,36,47,40,6,10,7000],30));