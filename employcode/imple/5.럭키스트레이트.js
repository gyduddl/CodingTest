function solution(n){
    let str = String(n)
    let len = str.length/2
    let rigth =0;
    let left =0;
    for(let i=0; i<len; i++){
        rigth+=+str[i]
        left+=+str[str.length-1-i]
    }
    return rigth===left?"LUCKY":'READY'
}

console.log(solution(7755))