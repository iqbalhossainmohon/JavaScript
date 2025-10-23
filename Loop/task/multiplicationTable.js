/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
*/

const number = 5;

console.log("Multiplication Table of: ", number);
for (let i = 1; i <= 10; i++) {
    const result = number * i;
      console.log(number, "x", i, "=", result);          
}
