// Coding Challenge #1 BMI CALCULATION

let heightJohn, heightMark, massJohn, massMark, markHigherBMI;

heightMark = 1.69;
massMark = 78;

heightJohn = 1.95;
massJohn = 92;

const bmiMarkCalc = massMark / heightMark ** 2;
const bmiJohnCalc = massJohn / (heightJohn * heightJohn);

console.log(`The BMI of Mark is ${bmiMarkCalc}`);
console.log(`The BMI of John is ${bmiJohnCalc}`);

if(bmiMarkCalc > bmiJohnCalc){
    console.log(`Mark's BMI ${bmiMarkCalc} is higher than John's ${bmiJohnCalc}`);
    markHigherBMI = true;
    console.log(markHigherBMI);
}else{
    console.log(`John's BMI ${bmiJohnCalc} is higher than Mark's ${bmiMarkCalc}`);
    markHigherBMI = false;
    console.log(markHigherBMI);
}