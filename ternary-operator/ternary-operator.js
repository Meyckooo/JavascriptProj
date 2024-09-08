//This type is ternary operator but in a different way

const age = 18;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'I like to drink wine' : 'I like to drink water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);