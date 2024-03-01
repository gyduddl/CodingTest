// 문제 숙지가 너무 안됨 
// 순서 이동과 실행될떄마다 answer 값을 올리는 것이 아닌 
//실행될떄마다 answer값을 올려야 한다. 

// function solution(priorities, location) {
//     let pri = priorities
//     var answer = 0;
//    let arr= Array.from({length:priorities.length},(v,i)=>(String.fromCharCode(i+65)))
//    let queue=[]
//    let [str,loc] = [arr[location],pri[location]]
    
//     while(pri.length){
//         let big =Math.max(...pri)
//         if(pri[0]===loc && arr[0]===str && pri[0]===big) return answer+1
//         if(pri[0]===big){
//             answer++
//             pri.shift();
//             arr.shift();
//         }else{
            
//             pri.push(pri.shift())
//             arr.push(arr.shift())
//         }
//     }
//     return answer;
// }

function solution (priorities, location){
    
    const list = priorities.map((v,i)=>({
        my : i ===location,
        val : v
    }));
    let count =0; 
    while(true){
        // let cur = list.splice(0,1)[0] //splice는 배열 형태로 나오니 [0]을 해줘서 객체만 뺴주어야 한다.
        let cur = list.shift();
        // some 성능을 만족하면 순회가 즉시 중단
        if(list.some(t=>t.val>cur.val)){//만약 cur의 val보다 t의 val이 크다면 조건이 참이니깐
            //cur은 아직 배열에서 빼주면 안되깐 list에 다시 넣어준다.
            list.push(cur)
        }else{//list에서 cur보다 큰 수가 없다면
            count++ // count를 높여주고
            //location의 값이라면
            if(cur.my) return count;
            
        }
    }

}