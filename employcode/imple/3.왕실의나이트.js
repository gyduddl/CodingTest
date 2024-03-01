function solution(n){
    let answer =0;
    let move = [[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,2]]
    let num2 = Number(n.split('')[1])-1
    let num = 0;
    let row = ['a','b','c','d','e','f','g','h']
    for(let i in row){
        if(row[i]===n.split('')[0]) num = Number(i)
    }
    for(let k=0; k<move.length; k++){
        let [nx,ny] = [num2+move[k][0], num+move[k][1]]
        if(nx<0 || nx>=8 || ny<0 || ny>=8) continue;
        answer++
    }
    return answer
}

console.log(solution('c2'))