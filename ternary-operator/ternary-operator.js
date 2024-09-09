//This type is ternary operator but in a different way

const age = 18;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'I like to drink wine' : 'I like to drink water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);


// Exanple2

const totalValue = 1300;

const discount = totalValue >= 1250 && totalValue <= 1500 ? totalValue * 20/100 : totalValue * 50/100;

console.log(`The total value of all items is ${totalValue} and the discount is ${discount}`)

const perDay = 500 * 24;

const salary = perDay >= 15000 && perDay <= 20000 ? `Your salary is ${perDay} and you belong to above salary wage` : `Your salary is ${perDay} and you belong to below or minimum salary wage`;

console.log(salary);