//set을 이용한 차집합 구하기
//Set.prototype.difference을 사용해야 한다.
function solution(arr, delete_list) {
    var answer = [];
    let setA=new Set(arr)
    let setB=new Set(delete_list)
    //방법 1
    // Set.prototype.difference=function(set){
    //     let result = new Set(this);
    //     for(let x of set){
    //         result.delete(x)
    //     }
    //     return result;
    // }
    //방법2
    Set.prototype.difference = function (set) {
        return [...this].filter(v => !set.has(v));
      };
      // set객체 배열로 만드는 법 
      //방법 1
    //   let result= setA.difference(setB);
    //   result.forEach(e=>answer.push(e))
    //   return answer;
      //방법2
    // return Array.from(setA.difference(setB));
    //방법3
    return setA.difference(setB);

}

console.log(solution([293, 1000, 395, 678, 94],[94, 777, 104, 1000, 1, 12]))
console.log(solution([110, 66, 439, 785, 1],[377, 823, 119, 43]))