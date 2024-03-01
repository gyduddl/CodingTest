function solution(str){
    let arr =[...str].map(Number)
    let count = arr.shift();
    for(let x of arr){
        let num= count+x
        let num2 = count*x
        if(num>num2){
            count+=x
        }else count*=x
    }
    return count
}

console.log(solution('576'))