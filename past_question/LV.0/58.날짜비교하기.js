// function solution(date1, date2) {
//     let [year1, month1, day1] = date1;
//     let [year2, month2, day2] = date2;
//     if(year1!==year2) return year1<year2? 1:0;
//     if(month1!==month2) return month1<month2?1:0;
//     if(day1!==day2) return day1< day2? 1:0;
//     return 0;
// }

// 다른 방법
function solution(date1, date2) {
    return new Date(date1)<new Date(date2)? 1: 0;
}

console.log(solution([2021, 12, 28],[2021, 12, 29])); //1
console.log(solution([1024, 10, 24],[1024, 10, 24])); //0
console.log(solution([2023, 1, 31], [2022, 12, 1])); //0
console.log(solution([2023, 5, 1], [2022, 4, 29])); //0
