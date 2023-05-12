
function solution(survey, choices) {
    let answer = {};
    let types = ["RT","CF","JM","AN"]

    types.forEach(e=>e.split('').forEach(f=>answer[f]=0))

    choices.forEach((choice, index)=>{
        let [n,m]= survey[index]

        answer[choice>4?m:n]+=Math.abs(choice-4)

    })
return types.map(([a,b])=>answer[b]>answer[a]?b:a).join('')
}
let survey=["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5]
console.log(solution(survey,choices))