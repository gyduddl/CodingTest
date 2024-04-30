/*뱀과 사다리 게임*/

const solve = (input) => {
    input.shift();
    const temp = [...new Array(101)].map((_, i) => i);
    for (const i of input) {
        const [start, end] = i.split(' ').map((v) => +v);
        temp[start] = end;
    }
    const graph = [...new Array(101)].map((_, i) =>
        [...new Array(6)].map((_, ii) => temp[i + ii + 1]).filter((v) => v <= 100)
    );
    console.log(BFS(1, graph));
};

const BFS = (start, graph) => {
    const visited = new Array(101).fill(false);
    const queue = [[start, 0]];
    while (queue.length) {
        const [node, count] = queue.shift();
        if (node === 100) return count;
        if (!visited[node]) {
            visited[node] = true;
            queue.push(...graph[node].map((v) => [v, count + 1]));
        }
    }
};

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
solve(input);
