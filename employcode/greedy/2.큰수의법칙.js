function sol(arr,m,k){
    let [a,b] = arr.sort((a,b)=>b-a)
    let num1 = parseInt(m/k)
    let num2= m%k
    
    return a*num1*k + b*num2
}

let arr =[2,4,5,4,6]

console.log(sol(arr, 8, 3))