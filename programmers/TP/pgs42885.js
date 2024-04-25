function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    while (left < right) {
        let sum = people[left] + people[right];
        if (right === left) return;
        else if (sum > limit) {
            right--;
        } else if (sum <= limit) {
            // 만약 두개를 더한 값이 limit보다 작으면
            right--;
            left++;
        }
        answer++;
    }

    if (right === left) answer++;

    return answer;
    //그리드 방식
    // for (var i=0, j= people.length - 1; i <=j ; i++ ) {
    //     if (people[i] + people [j] <= limit ){
    //         j--}
    //     answer ++
    // }
    // return answer;
}
