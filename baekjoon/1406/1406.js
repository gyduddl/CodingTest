
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
var left = input[0].split('');;
var right = [];
var cases = Number(input[1])
console.log(input.length, left,cases,input[1])
for(var i =2 ; i < cases+2; i++){
        if(input[i] === 'L'){
            if(left.length){
      			right.push(left.pop());
    		}
        }else if(input[i] === 'B'){
            if (left.length) {
      			left.pop();
    		}
        }else if(input[i] === 'D'){
            if(right.length){
      			left.push(right.pop());
    		}
        }else{
        left.push(input[i].split(' ')[1]);
    }
}
while(right.length) {
  	left.push(right.pop());
}
console.log(left.join(''));
