// brack --> I am done with this loop. loop ends here.
// & Continue --> I want to skip the current iteration and continue with the next one.

for(let i = 1; i < 10; i++) {
      if(i === 5) {
            break; // Exit the loop when i is 5
      }
      console.log("Number before break:", i);
}


for (let i = 1; i < 10; i++) {
      if (i % 2 === 1) {
            continue; // Skip odd numbers
      }
      console.log("Even Number:", i);
}
