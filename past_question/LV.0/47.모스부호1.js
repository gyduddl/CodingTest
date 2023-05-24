
function solution(letter) {
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }

    // 방법 1
    // var answer = '';
    // let morseValue= Object.keys(morse);
    // let result = letter.split(' ')
    // for(let x of result){
    //     answer+=morse[morseValue.find(e=> e===x)]
    // }
    // return answer;

    // 방법 2
    return letter.split(' ').map(e=> morse[e]).join('')
}

console.log(solution(".... . .-.. .-.. ---"))
console.log(solution(".--. -.-- - .... --- -."))