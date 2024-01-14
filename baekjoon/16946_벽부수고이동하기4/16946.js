const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

class Node {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    push(x,y) {
      let node = new Node(x,y);
      if (this.size === 0) {
        this.head = node;
      } else {
        this.tail.next = node;
      }
      this.tail = node;
      this.size++;
    }
    shift() {
      let temp = this.head;
      if (this.size === 0) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.size--;
      return temp;
    }
    get length() {
      return this.size;
    }
  }



let [n,m] = input.shift().split(' ').map(Number)

let arr =[]

for(let i=0; i<input.length; i++){
        arr.push(input[i].split('').map(Number))
}

let ans = Array.from({length:n},()=>Array(m).fill(0))

function bfs(i,j){
let queue = new Queue();

    queue.push(i,j)
    let answer =1;
    let visited = Array.from({length:n},()=>Array(m).fill(0))
    let move = [[-1,0],[0,1],[1,0],[0,-1]]
    while(queue.length>0){
        let v = queue.shift()
        let [x,y] = [v.x,v.y]
        for(let k=0; k<4;k++){
            let [nx,ny] = [x+move[k][0],y+move[k][1]]
            if(nx>=0 && nx<n && ny>=0 && ny<m && arr[nx][ny]===0 &&visited[nx][ny]===0){
                visited[nx][ny]=2;
                answer++
                queue.push(nx,ny)
            }
        }
    }
    return answer%10
}


for(let i =0; i<n; i++){
    for(let j =0; j<m; j++){
        if(arr[i][j]===1){
            let count = bfs(i,j)
            ans[i][j]=count
        }
    }
}

console.log(ans.map(p=>p.join('')).join('\n'))