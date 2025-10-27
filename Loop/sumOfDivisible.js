//Give me the sum of numbers from 1 to 100 that are divisible by 3.


let sum = 0;
for (let number = 1; number <= 100; number++) {
      if (number % 3 === 0 && number % 5 === 0) {
            sum += number;
            console.log(number);
      }
}

console.log("Total Sum of numbers divisible by 3 from 1 to 20 is:", sum);