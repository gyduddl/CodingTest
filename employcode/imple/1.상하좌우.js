function solution(n,arr){
    let x =1; y=1;
    for(let i of arr){
        let [nx,ny] = [x,y]
        if(i==="R") ny++
        if(i==="L") ny--
        if(i==="U") nx--
        if(i==="D") nx++
        if(nx<1 || nx>=n || ny<1 || ny>=n) continue

        x=nx;
        y=ny;
    }

    return [x,y]
}

console.log(solution(5,['R','R','R','U','D','D']))