const age = 20;

// condition ? "True case" : "False case";
age >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");



let price = 1000;
const isLeader = false;
if(isLeader === true){
      if(price > 500){
            price = price * 50/100;
      }
      else{
            price = price * 10/100;
      }
}
else{
      price = price ;
}
console.log(price);

price = isLeader === true ? price > 500 ? price * 50/100 : price * 10/100 : price ;
console.log(price);
