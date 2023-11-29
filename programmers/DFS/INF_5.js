//5. 합이 같은 부분 집합
function solution(arr){
    let answer="NO",flag=0;
    let n = arr.length
    let sum = arr.reduce((a,b)=> a+b,0)/2
    function DFS(v,s){
        if(flag) return
        if(v===n){
            if(sum===s){
                answer="YES"
                flag =1
            }
        }else{
            DFS(v+1, s+arr[v])
            DFS(v+1, s)
        }
    }
    DFS(0,0)
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));