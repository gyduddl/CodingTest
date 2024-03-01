function sol(n){
    let coin = [500,100,50,10]
    let count =0;
    for(let coins of coin){
        count += parseInt(n/coins)
        n%=coins
    }
    return count
}

console.log(sol(1260))