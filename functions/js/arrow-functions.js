'using strict';
console.log('Using Arrow Functions');

// This one is an example of declarations functions and this is a guide
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// Arrow Functions

// birthYear =>  ---this part is a function
// 2037 - birthYear; --- this is a return value
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const year = 2037 - birthYear;
    const age = year;
    const retirement  = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

const meyckoRetirementYears = yearUntilRetirement(2001, 'Meycko');
const mikeRetirementYears = yearUntilRetirement(1998, 'Mike');
console.log(meyckoRetirementYears);
console.log(mikeRetirementYears);