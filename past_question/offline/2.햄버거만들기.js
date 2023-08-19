//왜 틀렸징...?

function solution(ingredient) {
    let str=ingredient.join('')
    let cnt = 0;
    const findNum=(input)=>{
        if(!input.includes('1231')) return cnt;
        str=input.replace('1231','')
        cnt++
        findNum(str)
    }
    findNum(str)
    return cnt;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1,2,3]))
console.log(solution([1, 3, 2, 1, 2,3, 1, 3, 1, 2]))