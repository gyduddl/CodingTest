const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

// let [n,m] = input.shift().split(' ').map(Number)

// let miro = []

// for(let i =0; i<input.length;i++){
//     miro.push(input[i].split(''))
// }

const sol = (input) => {
    let answer = 0;
    const [R, C] = input[0].split(" ").map(Number);
    const map = input.slice(1).map((str) => str.split(""));
    const check = Array(R)
      .fill()
      .map((_) => Array(C).fill(0));
  
    let D, S;
    let water = [];
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (map[i][j] === "D") D = [i, j];
        if (map[i][j] === "S") S = [i, j];
        if (map[i][j] === "*") water.push([i, j]);
      }
    }
  
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
  
    function spreadWater() {
      const spread = [];
      for (let [x, y] of water) {
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
          if (map[nx][ny] === ".") {
            map[nx][ny] = "*";
            spread.push([nx, ny]);
          }
        }
      }
      water.push(...spread);
    }
  
    function bfs() {
      const queue = [];
      queue.push([...S, 0]); //x,y,time
      check[S[0]][S[1]] = 1; //고슴도치 굴이 있던 곳을 1로 표시
      while (queue.length) {
        const len = queue.length;
        spreadWater(); //queue이 실행될때 이 함수를 실행????이 방식은 또 첨이네...이걸 통해 map자체를 바꿔주는 것인가 
        //위 함수가 아래 for문이랑 같이 움직이네..이렇게 흘러가는구나.....아이 갓잇
        for (let cycle = 0; cycle < len; cycle++) {
          const [x, y, cnt] = queue.shift();
          if (x === D[0] && y === D[1]) {
            answer = cnt;
            return;
          }
  
          for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
            if (map[nx][ny] === "*" || map[nx][ny] === "X" || check[nx][ny]) continue; //물이거나 돌이거나 방문했을 경우 패스
            check[nx][ny] = 1;
            queue.push([nx, ny, cnt + 1]);
          }
        }
      }
      return;
    }
    bfs();
  
    return answer || "KAKTUS";
  };


console.log(sol(input))

//아니 똑같은 풀이인데 왜 난 틀리는 건데....
// function sol(n,m,miro){
//   let check= Array.from({length:n},()=>Array(m).fill(0))
//   let D,S;
//   let water=[]
//   let answer=0
//   for(let i=0; i<n;i++){
//     for(let j=0; j<m;j++){
//       if(miro[i][j]==='S') S = [i,j]
//       if(miro[i][j]==='D') D = [i,j]
//       if(miro[i][j]==='*') water.push([i,j])
//     }
//   }
//   let dx =[-1,0,1,0]
//   let dy = [0,1,0,-1]
//   function rate(){
//     let squeue =[]
//     for(let [x,y] of water){
//       for(let k=0; k<4; k++){
//         let nx = x +dx[k]
//         let ny = y+dy[k]
//         if(nx<0 || nx>=n || ny<0 || ny>=m) continue
//         if(miro[nx][ny]==='.'){
//           miro[nx][ny]='*'
//           squeue.push([nx,ny])
//         }
//       }
//     }
//     water.push(...squeue)
//   }

//   function dfs(){
//     let queue =[]
//     queue.push([...S,0])
//     check[S[0]][S[1]]=1
//     while(queue.length){
//       let [x,y,cnt] = queue.shift()
//       rate()
//       if(x===D[0]&& y===D[1]) {
//         answer = cnt;
//         break
//       }
//       for(let k=0; k<4;k++){
//         let nx = x+dx[k]
//         let ny = y+ dy[k]
//         if(nx<0 || nx>=n || ny<0 || ny>=m) continue
//         if(miro[nx][ny]==='*'||miro[nx][ny]==='X'||check[nx][ny]) continue
//         check[nx][ny] =1
//         queue.push([nx,ny,cnt+1])
//       }
//     }
//   }
//   dfs()
//   return answer || "KAKTUS"
// }

//   console.log(sol(n,m,miro))