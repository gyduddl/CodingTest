function solution(n, control) {
    for(let x of control){
        switch(x){
            case 'w':n+=1;break
            case 's':n-=1;break
            case 'd':n+=10;break
            case 'a':n-=10;break
        }
    }

    return n;
}

console.log(solution(0,"wsdawsdasdddd"))