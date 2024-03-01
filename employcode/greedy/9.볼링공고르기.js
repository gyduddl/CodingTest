// function solution(arr){
//     let answer =[]
//     let tmp = Array(2).fill(0)
//     let ch = Array(arr.length).fill(0)
//     function dfs(v,s){
//         if(v===2){
//             answer.push([...tmp])
//         }else{
//             for(let i =s; i<arr.length; i++){
//                 if(ch[i]===0 && arr[i]!==tmp[0]){
//                     ch[i]=1;
//                     tmp[v] =arr[i]
//                     dfs(v+1,i)
//                     ch[i]=0
//                 }
//             }
//         }
//     }

//     dfs(0,0)
//     return answer.length
// }

// let arr = [1,3,2,3,2]
// let arr1 = [1,5,4,3,2,4,5,2]

// console.log(solution(arr1))




// 그리디 스타일
function solution(arr){
    arr.sort((a,b)=>a-b) // 순서대로
    let result =0;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]!==arr[j]){
                result+=1
            }
        }
    }

    return result;
}

let arr = [1,3,2,3,2]
let arr1 = [1,5,4,3,2,4,5,2]

console.log(solution(arr))