/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
*/

var startNum = 81;
var sumOdd = 0;   

while(startNum <= 131) {
    if(startNum % 2 !== 0) {
        sumOdd = sumOdd + startNum;  
    }
      startNum++;
}

console.log("Sum of odd numbers from 81 to 131 is: " + sumOdd);



/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
*/

var beginNum = 206;
var sumEven = 0;  
while(beginNum <= 311) {
    if(beginNum % 2 === 0) {
        sumEven = sumEven + beginNum;  
    }
      beginNum++;
}

console.log("Sum of even numbers from 206 to 311 is: " + sumEven);