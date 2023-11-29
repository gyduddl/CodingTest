//이분검색

//최소한 dvd 한개의 용량은 9이여야 한다. 최대는 모든 수를 더한 45이다.
//lt = 9 ~ rt = 45
//lt와 rt의 중간인 mid를 구한다.
// dvd 용량이 mid일때 n개의 음악을 연속적으로 dvd 세장에 넣을 수 있는지 확인해봐야한다.
// dvd 한개당의 최소 용량을 n개의 음악을 나눠서 넣어야한다.


function count(songs, capacity){
    let cnt=1, sum=0;
    for(let x of songs){
        if(sum+x>capacity){
            cnt++;
            sum=x
        }else sum+=x
    }
    return cnt;
}

function solution(m, songs){
    let answer;
    songs.sort((a,b)=>a-b);
    let lt=songs[songs.length-1]
    let rt = songs.reduce((a,b)=>a+b,0)
    // mid의 용량의 세개의 dvd에 노래가 모두 들어가는지 
    while(lt<=rt){
    let mid=parseInt((lt+rt)/2);

        if(count(songs,mid)<=m){
            answer=mid;
            rt=mid-1;
        }else{
            lt=mid+1
        }
    }
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));