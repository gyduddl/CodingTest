//끝나는 시간으로 정렬하는 것이 좋다. 빨리끝나는 것을 선택해야 최대한 많이 뽑을 수 있으니깐 

function solution(meeting){
    let answer=0;
    meeting.sort((a,b)=>{
        if(a[1]===b[1]) return a[0]-b[0]
        else return a[1]-b[1]
    }) 
    let ed = 0;//끝나는 시간을 넣어주기
    for(let s of meeting){
        if(s[0]>=ed){
            answer++
            ed=s[1]
        }
    }
    return answer;
}

let arr=[[3, 3],[1,3],[2,3]];
console.log(solution(arr));