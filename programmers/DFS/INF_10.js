// 10. 순열 구하기
// 자기 자신이 들어가면 안됨
// function solution(m, arr){          
//     let answer = [];
//     let n = arr.length;
//     let ch = Array.from({length:n},()=>0)
//     let tmp = Array.from({length:m},()=>0)
//     function dfs(v){
//         if(v===m){
//             answer.push([...tmp])
//         }else{
//             for(let i=0; i<n; i++){
//                 if(ch[i]===0){
//                     ch[i]=1
//                     tmp[v]=arr[i]
//                     dfs(v+1)
//                     ch[i]=0
//                 }
//             }
//         }
//     }
//     dfs(0)
//     return answer;
// }

function solution(m,arr){
    let answer =[]
    let path = Array.from({length:m},()=>0)
    let ch = Array.from({length:arr.length},()=>0)
    function dfs(v){
        if(v===m){
            answer.push(path.join(' '))
        }else{
            for(let i =0;i<arr.length;i++){
                if(ch[i]===0){
                    ch[i]=1;
                    path[v]=arr[i]
                    dfs(v+1)
                    ch[i]=0
                }
            }
        }
    }
    dfs(0)
    return answer
}

let arr=[3, 6, 9];
console.log(solution(2, arr));
// 3 6
// 3 9
// 6 3
// 6 9
// 9 3
// 9 6