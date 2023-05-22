function solution(code) {
    var ret = '';
    let mode = 0
    return [...code].reduce((acc,cur, index)=>{
        if(mode){
            // mode가 1이면 cur이 '1'이 아니고 index가 홀수일때 acc에 추가해주고 mode를 0로 바꿔준다.
            if(cur!=='1'&&index%2===1) return acc+cur;
            if(cur==='1') mode=0
        }else {
            // mode가 0이면 cur이 '1'이 아니고 index가 짝수일때 acc에 추가해주고 mode를 1로 바꿔준다.
            if(cur!=='1'&&index%2===0) return acc+cur;
            if(cur==='1') mode=1
        }
        return acc;
        //acc의 초기값 ''을 줘야함
    },'')||"EMPTY"
 // return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
 //return result || "EMPTY" -> 이런식으로 처리
}

console.log(solution('abc1abc1abc')) //"acbac"

//다른 방법
// function solution(code) {
//     let str = ''
//     let mode = 0
//     for(let i =0; i < code.length; i++){
//         if(mode){ //mode =1 => true
//             if(code[i]!=='1'&&i%2===1) str += code[i]
//             if(code[i]==='1') mode=0
//         }else { //0=> false
//             if(code[i]!=='1'&&i%2===0) str += code[i]
//             if(code[i]==='1') mode=1
//         }

//             console.log(str, mode)
//     }
    
//     // console.log(str)
//     return str?str:"EMPTY";
// }

// console.log(solution('')) //acbac