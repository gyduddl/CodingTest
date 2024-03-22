//4. 부분집합 구하기
// function solution(n){
//     let answer =[];
//     let ch = Array.from({length:n+1},()=>0)
//     function DFS(L){
//         if(L===n+1){
//             let tmp = ''
//             for(let i=1;i<n+1; i++){
//                 if(ch[i]===1){
//                     tmp += (i+ ' ')
//                 }
//             }
//             //단 공집합은 출력하지 않습니다.
//             if(tmp.length>0) answer.push(tmp.trim())
//         }else{
//             ch[L]=1
//             DFS(L+1)
//             ch[L]=0
//             DFS(L+1)
//         }
//     }
//     DFS(1) // 1인 이유를 살펴봅시다
//     return answer;
// }

function solution(n) {
    let set = new Set();
    let ch = Array.from({ length: n + 1 }, () => 0);
    function dfs(v, s, path) {
        if (v > 0 && !set.has(path)) {
            set.add(path.trim());
        }
        for (let i = n; i >= s; i--) {
            if (ch[i] === 0) {
                ch[i] = 1;
                dfs(v + 1, i, path + ' ' + i);
                ch[i] = 0;
            }
        }
    }
    dfs(0, 1, '');
    console.log([...set].reverse());
}

console.log(solution(3));
// 1 2 3
// 1 2
// 1 3
// 1
// 2 3
// 2
// 3
