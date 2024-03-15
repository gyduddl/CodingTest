function solution(nums) {
    var answer = 0;
    let set = new Set(nums);
    console.log(set.size);
    if (set.size <= nums.length / 2) {
        answer = set.size;
    } else {
        answer = parseInt(nums.length / 2);
    }
    return answer;
}

// 배열에서 총 몇 종류가 있는지 파악
// 그것이 num/2 작으면 그것 출력 크면 num/2출력
