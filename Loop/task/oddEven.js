/***
Subtask-1:
Find all the odd numbers from 61 to 100.
*/
console.log("Find all the odd numbers from 61 to 100.");
var num = 61;
while(num <= 100) {
    if(num % 2 !== 0) {
        console.log(num);
    }
      num++;      
}

/***
Subtask-2:
Find all the even numbers from 78 to 98.
*/

console.log("Even numbers from 78 to 98 are:");
var number = 78;
while(number <= 98) {
    if(number % 2 === 0) {   
            console.log(number);
      }
      number++;      
}