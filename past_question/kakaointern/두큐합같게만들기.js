// *'투포인터'란 배열이 있고 시작과 끝점을 계속해서 움직이면서 원하는 값을 도출하는 알고리즘이다.
// *최대 반복 횟수(queue1 길이 * 3) 만큼 돌려주면서, 한쪽 큐의 총합이 목표치보다 높을 시에는 queue1의 pointer 값를 높여주고,
//  값이 작으면 queue2의 pointer 값을 높여주면서 해당 값을 빼고, 넣는 효과를 통해 총합의 값을 조절해줍니다.

//단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.

function solution(queue1, queue2){
    //총합 함수 먼저 만들어주기
    let sum = (arr)=>arr.reduce((acc,cur)=> acc+cur);
    //각 합 구해주기
    let sum1 = sum(queue1),sum2= sum(queue2);
    //각 큐마다 같은 값
    let totalNum= (sum1+sum2)/2
    //전체 배열
    let totalArr = [...queue1,...queue2]

    let pointer=0, pointer2=queue1.length; // 이걸 중심으로 튜포인터를 만든다. 

    //최대 반복 횟수
    let end = pointer2*3

    for(let count=0; count<end; count++){
        //sum1과 totalNum가 같으면 count를 높여준다.
        if(sum1===totalNum){
           return count
        }
        
        //sum1<totalNum이면 sum2의 첫번째 인덱스의 값 더해주기
        if(sum1<totalNum){
            sum1 += totalArr[pointer2++]
        }
        //sum1>totalNum이면 sum1의 첫번째 인덱스 뺴주기
        else{
            sum1-=totalArr[pointer++]
        }
    }
// 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.

return -1

}

// let queue1 = [3, 2, 7, 2]
// let queue2 = [4, 6, 5, 1]

let queue1 = [1,1]
let queue2 = [1,5]


console.log(solution(queue1,queue2))