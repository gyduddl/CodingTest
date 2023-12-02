//3차원 토마토 -> 나중에 다시 해보기...휴

// [x, y, z] //5 3 2 
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

class Node{
    constructor(data){
        this.value=data;
        this.next = null;
        // this.x = x;
        // this.y = y;
        // this.z = z;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size=0;
    }
    push(data){
        let node = new Node(data)
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last =node;
        }
        return ++this.size;
    }
    shift(){
        if(!this.first) return null;
        let node = this.first;
        if(this.first === this.last) this.last=null;
        this.first = this.first.next;
        this.size--;
        return node.value
    }
    length(){
        return this.size
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
                    queue.push([x,y,z])
                }
            }
        }
    }

  
    while(queue.length){

            let v = queue.shift()
            console.log(v)
            // let [x,y,z] = v
        //     for(let k=0; k<6; k++){
        //         let nx = x+ dx[k]
        //         let ny = y + dy[k]
        //         let nz = z+dz[k]
        //         if(nx>=0 && ny>=0 && nz>=0 && nx < h && ny<n && nz<m && tomato[nx][ny][nz]===0){
        //             queue.push([nx,ny,nz])
        //             tomato[nx][ny][nz]=tomato[x][y][z]+1
        //     }
        // }
    }

    // for(let i=0; i<h; i++){
    //     for(j=0; j<n; j++){
    //         for(let k=0; k<m; k++){
    //             return tomato[i][j][k]===0? -1: Math.max(0,tomato[i][j][k]-1)
    //         }
    //     }
    // }
}

console.log(solution(m,n,h,tomato))