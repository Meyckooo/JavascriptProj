'using strict';

console.log('Functions Declarations Vs. Expressions');
// Functions Declarations Vs. Expressions

// Declarations
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Expressions

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);