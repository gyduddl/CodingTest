//3차원 토마토 -> 나중에 다시 해보기...휴

// [x, y, z] //5 3 2 
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

// class Node {
//     constructor(x, y, z) {
//       this.x = x;
//       this.y = y;
//       this.z = z;
//       this.next = null;
//     }
//   }
//   class Queue {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//     }
//     push(x, y, z) {
//       let node = new Node(x, y, z);
//       if (this.size === 0) {
//         this.head = node;
//       } else {
//         this.tail.next = node;
//       }
//       this.tail = node;
//       this.size++;
//     }
//     shift() {
//       let temp = this.head;
//       if (this.size === 0) {
//         this.head = null;
//         this.tail = null;
//       } else {
//         this.head = this.head.next;
//       }
//       this.size--;
//       return temp;
//     }
//     get length() {
//       return this.size;
//     }
//   }

// let [m,n,h] = input.shift().split(' ').map(Number)

// let tomato =[...Array(h)].map(()=>[...Array(n)].map(()=>[...Array(m)].fill(0)))

// for(let i=0; i<h; i++){
//     for(let j=0; j<n; j++){
//         tomato[i][j] = input.shift().split(' ').map(Number)
//     }
// }

// function solution(m,n,h,tomato){
// let queue =new Queue();

//     let dx = [-1,1,0,0,0,0]
//     let dy = [0,0,-1,1,0,0]
//     let dz = [0,0,0,0,-1,1]

//     for(let x=0;x<h;x++){
//         for(let y =0; y<n; y++){
//             for(let z=0; z<m; z++){
//                 if(tomato[x][y][z]===1){
//                     queue.push(x,y,z)
//                 }
//             }
//         }
//     }
//     while(queue.length){
//             let v = queue.shift()
//             let [x,y,z] =[v.x,v.y,v.z]
//             for(let k=0; k<6; k++){
//                 let nx = x+ dx[k]
//                 let ny = y + dy[k]
//                 let nz = z+dz[k]
//                 if(nx>=0 && ny>=0 && nz>=0 && nx < h && ny<n && nz<m && tomato[nx][ny][nz]===0){
//                     queue.push(nx,ny,nz)
//                     tomato[nx][ny][nz]=tomato[x][y][z]+1
//             }
//         }
//     }
//     for(let i=0; i<h; i++){
//         for(j=0; j<n; j++){
//             for(let k=0; k<m; k++){
//                 return tomato[i][j][k]===0? -1: Math.max(0,tomato[i][j][k]-1)
//             }
//         }
//     }
// }

// console.log(solution(m,n,h,tomato))


// let [n,m,h] = input.shift().split(' ').map(Number)

// let tomato = Array.from({length:h},()=>Array.from({length:m},()=>Array(n).fill(0)))

// for(let i=0; i<h; i++){
//   for(let j=0; j<m; j++){
//       tomato[i][j]= input.shift().split(' ').map(Number)
//   }
// }

// function sol(n,m,h,tomato){
//   let queue = []
//   let dx = [-1,1,0,0,0,0]
//   let dy = [0,0,-1,1,0,0]
//   let dh = [0,0,0,0,-1,1]

//   for(let i=0; i<h; i++){
//     for(let j=0; j<m; j++){
//       for(let t=0; t<n; t++){
//         if(tomato[i][j][t]===1) queue.push([i,j,t])
//       }
//     }
//   }
//   console.log(queue)

//   while(queue.length){
//     let [x,y,h] = queue.shift()
//     for(let k=0; k<6; k++){
//       let [nx,ny,nh] = [x+dx[k], y+dy[k], h+dh[k]]
//       if(nx>=0 && ny>=0 && nh>=0 && nx<h && ny<m && nh<n && tomato[nx][ny][nh]===0){
//         queue.push([nx,ny,nh])
//         tomato[nx][ny][nh] = tomato[nx][ny][nh] +1
//       }
//     }
//   }

//   console.log(tomato)
//   let day =0
//   for(let i=0; i<h; i++){
//     for(let j=0; j<m; j++){
//       for(let t=0; t<n; t++){
//         if(tomato[i][j][t]===0) return day =-1
//         day = Math.max(day, tomato[i][j][t]-1)
//       }
//     }
//   }
//   return day
// }

// console.log(sol(n,m,h,tomato))


let [n,m,h] = input.shift().split(' ').map(Number)

// let tomato =[...Array(h)].map(()=>[...Array(m)].map(()=>[...Array(n)].fill(0)))
let tomato = Array.from({length:h},()=>Array.from({length:m},()=>Array(n).fill(0)))

for(let i=0; i<h; i++){
    for(let j=0; j<m; j++){
        tomato[i][j] = input.shift().split(' ').map(Number)
    }
}

function solution(n,m,h,tomato){
let queue =[];

    let dx = [-1,1,0,0,0,0]
    let dy = [0,0,-1,1,0,0]
    let dz = [0,0,0,0,-1,1]

    for(let x=0;x<h;x++){
        for(let y =0; y<m; y++){
            for(let z=0; z<n; z++){
                if(tomato[x][y][z]===1){
                    queue.push([x,y,z])
                }
            }
        }
    }
    while(queue.length){
            let [x,y,z] = queue.shift()
            // let [x,y,z] =[v.x,v.y,v.z]
            for(let k=0; k<6; k++){
                // let nx = x+ dx[k]
                // let ny = y + dy[k]
                // let nz = z+dz[k]
                let [nx,ny,nz] = [x+dx[k], y+dy[k], z+dz[k]]
                if(nx>=0 && ny>=0 && nz>=0 && nx < h && ny<m && nz<n && tomato[nx][ny][nz]===0){
                    queue.push([nx,ny,nz])
                    tomato[nx][ny][nz]=tomato[x][y][z]+1
            }
        }
    }
    for(let i=0; i<h; i++){
        for(j=0; j<m; j++){
            for(let k=0; k<n; k++){
                return tomato[i][j][k]===0? -1: Math.max(0,tomato[i][j][k]-1)
            }
        }
    }
}

console.log(solution(n,m,h,tomato))