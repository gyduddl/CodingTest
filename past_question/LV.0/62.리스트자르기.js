// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
// n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
// n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
// n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로

// function solution(n, slicer, num_list) {
//     var answer = [];
//     switch(n){
//         case 1:
//             let arr1 =num_list.slice(0,slicer[1]+1);
//             answer.push(...arr1);
//             break;
//         case 2:
//             let arr2 =num_list.slice(slicer[0]);
//             answer.push(...arr2);
//             break;
//         case 3:
//             let arr3 =num_list.slice(slicer[0],slicer[1]+1);
//             answer.push(...arr3);
//             break;
//         case 4:
//             let arr4=num_list.slice(slicer[0],slicer[1]+1);
//             [...arr4].map((a,i)=>i%slicer[2]===0?answer.push(a):a)
//             break;
//     }
//     return answer;
// }

//다른 방법 2
function solution(n, slicer, num_list) {
    let [a,b,c]= [...slicer]
    switch(n){
        case 1:
            return num_list.slice(0,b+1)
        case 2:
            return num_list.slice(a)
        case 3:
            return num_list.slice(a,b+1)
        case 4:
        // 1-> ture, 0-> false
            return num_list.slice(a,b+1).filter((_,idx)=>!(idx%c))
    }
}


console.log(solution(3,	[1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); //[2, 3, 4, 5, 6]
console.log(solution(4,	[1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); //[2, 4, 6]