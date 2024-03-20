//BOJ_5107_마니또
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

function solution(input) {
    let num = 0;
    let count = 0;
    while (input.length) {
        let N = input.shift();
        let inputs = [];
        if (!isNaN(N) && Number(N)) {
            for (let i = 0; i < N; i++) {
                let temp = input.shift().split(' ');
                inputs.push(temp);
            }
            num++;
            let graph = new Map();
            for (let Array of inputs) {
                let A = Array[0];
                let B = Array[1];
                if (!graph.has(A)) graph.set(A, []);
                if (!graph.has(B)) graph.set(B, []);
                graph.get(A).push(B);
                graph.get(B).push(A);
            }
            let visited = new Set();
            console.log(inputs);
            function bfs(name) {
                let queue = [name];
                while (queue.length) {
                    console.log('bfs', visited);

                    let next = queue.shift();
                    for (let current of graph.get(next))
                        if (!visited.has(current)) {
                            visited.add(current);
                            queue.push(current);
                        }
                }
            }
            for (let [name] of inputs) {
                console.log('tt', name, visited, count);
                if (!visited.has(name)) {
                    bfs(name);
                    count++;
                }
            }
        }
        console.log(num + ' ' + count);
        count = 0;
    }
}

let input = ['5', 'Andrew Sally', 'Chen Andrew', 'Ahmed Tess', 'Sally Chen', 'Tess Ahmed', '0'];

console.log(solution(input));
