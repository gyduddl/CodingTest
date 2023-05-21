function solution(arr) {
//1. 먼저 stk 빈배열을 만들어준다.
    let stk=[];
//2. arr길이만큼 반복문을 만들어주고
    for(let i=0;i<arr.length;i++){
//3.만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
        if(stk.length===0){
            stk.push(arr[i]);
        }
//4.stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 
//stk의 뒤에 추가하고 i에 1을 더합니다.
        else if(stk[stk.length-1]<arr[i]){
            stk.push(arr[i]);
//5.stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 
//stk의 마지막 원소를 stk에서 제거합니다.
        }else if(stk[stk.length-1]>=arr[i]){
            stk.pop()
//이럴경우 i의 변화가 없지만 반복문이여서 i는 계속 증가하기에
// i--를 해주어 i의 증가를 막음
            i--
        }
    }
    return stk;
}
i=
console.log(solution([1, 4, 2, 5, 3]))