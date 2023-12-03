//이해가.....주르륵
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

class Node {
    constructor(x,y,cnt, isBreak) {
      this.x = x;
      this.y = y;
      this.cnt = cnt;
      this.isBreak = isBreak
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    push(x,y,cnt, isBreak) {
      let node = new Node(x,y,cnt, isBreak);
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

let [m,n] = input.shift().split(' ').map(Number)

let miro = []

for(let i=0; i<input.length; i++){
    miro.push(input[i].split('').map(Number))
}

const visited = Array.from({length:m},()=>Array.from({length:n},()=>Array.from({length:2},()=>0)))

const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

let queue = new Queue();
queue.push(0,0,1,0)
let ans = -1;

while(queue.length){
    let v = queue.shift()
    let [x,y,cnt, isBreak] = [v.x,v.y, v.cnt, v.isBreak]

    if(x===m-1 && y ===n-1){
        ans = cnt;
        break //제일 먼저 도착한 것이 제일 빨리 도착한거니깐
    }

    //방문한적이 있는지 확인
    if(visited[x][y][isBreak]) continue;
    else visited[x][y][isBreak] = 1;

    for(let k=0; k<4; k++){
        let nx = x+dx[k]
        let ny = y+dy[k]
        if(nx<0 || nx>=m || ny<0 || ny>=n) continue;
        let nextBreak = isBreak
        if(miro[nx][ny]){//벽이라면
            if(!nextBreak) nextBreak=1
            else continue
        }
        queue.push(nx,ny,cnt+1, nextBreak)
    }
}

console.log(ans)

