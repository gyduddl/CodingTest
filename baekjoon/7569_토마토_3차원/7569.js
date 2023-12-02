//3차원 토마토 -> 나중에 다시 해보기...휴

// [x, y, z] //5 3 2 
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

class Node {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    push(x, y, z) {
      let node = new Node(x, y, z);
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

let [m,n,h] = input.shift().split(' ').map(Number)

let tomato =[...Array(h)].map(()=>[...Array(n)].map(()=>[...Array(m)].fill(0)))

for(let i=0; i<h; i++){
    for(let j=0; j<n; j++){
        tomato[i][j] = input.shift().split(' ').map(Number)
    }
}

function solution(m,n,h,tomato){
let queue =new Queue();

    let dx = [-1,1,0,0,0,0]
    let dy = [0,0,-1,1,0,0]
    let dz = [0,0,0,0,-1,1]

    for(let x=0;x<h;x++){
        for(let y =0; y<n; y++){
            for(let z=0; z<m; z++){
                if(tomato[x][y][z]===1){
                    queue.push(x,y,z)
                }
            }
        }
    }
    while(queue.length){
            let v = queue.shift()
            let [x,y,z] =[v.x,v.y,v.z]
            for(let k=0; k<6; k++){
                let nx = x+ dx[k]
                let ny = y + dy[k]
                let nz = z+dz[k]
                if(nx>=0 && ny>=0 && nz>=0 && nx < h && ny<n && nz<m && tomato[nx][ny][nz]===0){
                    queue.push(nx,ny,nz)
                    tomato[nx][ny][nz]=tomato[x][y][z]+1
            }
        }
    }
    for(let i=0; i<h; i++){
        for(j=0; j<n; j++){
            for(let k=0; k<m; k++){
                return tomato[i][j][k]===0? -1: Math.max(0,tomato[i][j][k]-1)
            }
        }
    }
}

console.log(solution(m,n,h,tomato))