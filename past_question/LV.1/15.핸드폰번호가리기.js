//방법1
function solution(phone_number) {
    var answer = [...phone_number];
    for(let i=0; i<phone_number.length-4;i++){
        answer[i]='*'
    }
    return answer.join('');
}

//방법2_ replace를 활용
function hide_numbers(s){
    return s.replace(/\d(?=\d{4})/g, "*");
  }
  //**replace() */
  //1. replace(찾을값, 바꿀값)
  
  //2. replace() 함수는 첫번째로 찾은 문자열만 치환해 줍니다. 
  //ex. let str = 'apple, banana, orange, banana';
  //let replaced_str = str.replace('banana', 'tomato'); 
  //변경후 : apple, tomato, orange, banana
  // -> 모든 문자열을 치환하려면
  // str.replace(/banana/g, 'tomato'); -> 이렇게 써준다.
  // 정규식으로 찾으려는 문자열을 '/'로 감싸서, '/'뒤에 'g'라는 modifier을 붙여주면 된다.
  
  //3. replace()함수는 대소문자를 구분합니다. 
  // -> 대 소문자 구문 없이 치환하려면
  //str.replace(/banana/gi, 'tomato');
  // 정규식으로 'i'와 'g' modifier을 붙여주면 된다.


  //방법 3 _ repeat()을 사용
  function solution(phone_number){
    return '*'.repeat(phone_number.length-4)+phone_number.slice(-4)
  }