// 테스트 5-14까지 틀림
// function solution(genres, plays) {
//     var answer = [];
//     let arr = genres.map((v, i) => [v, plays[i], i]);
//     arr.sort((a, b) => b[1] - a[1]);
//     let hash = new Map();
//     let hash2 = new Map();

//     arr.map((v, i) => {
//         if (hash.has(v[0])) {
//             hash.set(v[0], hash.get(v[0]) + v[1]);
//         } else {
//             hash.set(v[0], v[1]);
//         }
//     });
//     for (let x of hash) {
//         let num = [];
//         for (let y of arr) {
//             if (num.length < 2) {
//                 if (x[0] === y[0]) num.push(y[2]);
//             }
//         }
//         answer.push(...num);
//     }

//     return answer;
// }

//위에꺼랑 뭐가 다른지 모르겠슴당
function solution(genres, plays) {
    var answer = [];
    let arr = genres.map((v, i) => ({ genre: v, play: plays[i], index: i }));
    let hash = new Map();
    let hash2 = new Map();

    arr.map((v, i) => {
        if (hash.has(v.genre)) {
            hash.set(v.genre, hash.get(v.genre) + v.play);
        } else {
            hash.set(v.genre, v.play);
        }
    });
    let big = [...hash].sort((a, b) => b[1] - a[1]);
    console.log(big);
    for (let x of big) {
        let num = [];
        for (let y of arr) {
            if (x[0] === y.genre) num.push(y);
        }
        num.sort((a, b) => b.play - a.play);
        num.forEach((v, i) => {
            if (i < 2) {
                answer.push(v.index);
            }
        });
    }

    return answer;
}

//지금까지 커밋
