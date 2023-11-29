// function solution(begin, target, words) {
//     let answer =0;
//     let ch = ({lenght:words.length},()=>false)
//     let path =[]
//     function DFS(cur, target, step,path){
//         if(cur===target){
//             if(answer===0 || answer>step){ //answer>step -> 최소값을 갖기 위한 것 
//                 answer=step
//             console.log('fjjf',step,path)

//             }
//             return
//         }
//         for(let i=0; i<words.length;i++){
//             if(ch[i]) continue;
//             let diffCount = 0;
//             for(let k=0; k<words[i].length; k++){
//                 if(words[i][k] !== cur[k]){
//                     diffCount +=1;
//                 }
//             }
//             if(diffCount===1){
//                 ch[i]= true;
//                 path.push(words[i])
//                 DFS(words[i], target, step+1,path); 
//                 // step++ (vs) step+1
//                 ch[i] = false
//                 path.pop()
//             }
//         }
//     }
//     DFS(begin, target, 0,path)
//     return answer
// }


// function solution(begin, target, words) {
//     const visited = { [begin] : 0 };
//     const queue = [begin];
//     while(queue.length) {
//    console.log(queue)

//       const cur = queue.shift();
      
//       if(cur === target) break;
      
//       for(const word of words) {
//         if(isConnected(word, cur) && !visited[word]) {
//           visited[word] = visited[cur] + 1;
//           queue.push(word);
//         }
//       }
//     }
//     return visited[target] ? visited[target] : 0;
//   }
  
//   const isConnected = (str1, str2) => {
//     let count = 0;
//     const len = str1.length;
    
//     for(let i = 0; i < len; i++) {
//       if(str1[i] !== str2[i]) count++;
//     }
    
//     return count === 1 ? true : false;
//   }





function solution(begin, target, words) {
    let visitied = {[begin]:0}
    let queue =[begin]
    while(queue.length){
      let v = queue.shift()
      // if(v===target) break;
      for(let word of words){
        if(isConnected(word,v) && !visitied[word]){ //visitied에서 word의 값이 0이라면
          visitied[word] = visitied[v]+1
          queue.push(word)
        }
      }
    }
      return visitied[target]? visitied[target] : 0
    }
    function isConnected(str1, str2){ // 두 단어가 같은지 확인하는 함수
      let diff =0
      for(let i =0; i< str1.length; i++){
        if(str1[i]!==str2[i]){
          diff+=1
        }
      }
      return diff===1?true : false
    }

console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]))

// console.log(solution("hit","cog",["hot","dot","dog","lot","log","cog"]))