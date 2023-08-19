function solution(babbling) {
    var answer = 0;
    let str = ['aya','ye','woo','ma']
    for(let i=0; i<babbling.length; i++){
        let babble = babbling[i]
        for(let j=0;j<str.length; j++){
            //연속으로 같은 발을을 하는 것을 어려워 한다. 
            if(babble.includes(str[j].repeat(2))) continue;
            babble=babble.split(str[j]).join(' ')
        }
        if(babble.split(' ').join('').length===0) answer++
    }
    return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
console.log(solution(["aya", "yee", "u", "maa"]))