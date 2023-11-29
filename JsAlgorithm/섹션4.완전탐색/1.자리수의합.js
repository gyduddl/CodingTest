            function solution(n, arr){
                let answer, max = Number.MAX_SAFE_INTEGER; //answer은 undefined 나오는디... 

                for(let i=0; i<n; i++){
                    let sum = String(arr[i]).split('').reduce((a,b)=> a+ Number(b),0);
                    if(sum>max){
                        max=sum;
                        answer=i;
                    }else if(sum===max) {
                        if(i>answer) answer =i;
                    }
                }
                return answer;
            }
            
            let arr=[128, 460, 603, 40, 521, 137, 123];
            console.log(solution(7, arr));