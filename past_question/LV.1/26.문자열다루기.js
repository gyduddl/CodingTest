function solution(s) {
    return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
}

console.log(solution('3e10'))