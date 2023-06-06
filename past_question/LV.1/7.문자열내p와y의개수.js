// function solution(s){
//     let Pcount= 0;
//     let Ycount =0;
//     for(let e of s){
//     if(e.toUpperCase()==='P') Pcount++;
//     else if(e.toUpperCase()==='Y') Ycount++;   
//     }
//     return (Pcount===Ycount) ;
// }



//다른 방법
// function solution(s){
//     return s.toUpperCase().split('P').length===s.toUpperCase().split('Y').length;
// }




//match를 이용한 방법 
// match 함수는 특정 텍스트 안에 검색할 단어, 찾고싶은 단어가 있는 경우 해당 텍스트가 문구에 포함되어 있는지 확인할 수 있습니다. 또한 단어뿐만 아니라 정규표현식을 사용하여 특정 패턴을 검색하는 것 역시 가능합니다.

// 해당 문자열.match('찾을 단어')
/// match() 함수는 인자에 포함된 문자를 찾으면 이를 반환함.
//정규표현식 코드는 따로 regExp 변수에 저장하였으며, 표현식 뒤에 ig는 대소문자 구분을 허용하지 않고 모든 패턴을 검색하기 위함이다.
function solution(s){
    return s.match(/y/ig).length===s.match(/p/ig).length;
}

// --> 이 문제는 문자열에 특정문자열이 없으면 null값이 나오는데 그것을 보완하지 못해서 런타임 에러가 나온다. 