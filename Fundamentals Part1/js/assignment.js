/*
// Values and Variables
// let country = 'Philippines';
// let continent = 'Asia';
let population = 13;
let averageValue = 12;

// console.log(country);
// console.log(continent);
// console.log(population);


// Data Types

// let isIsland = false;
let language;


language = 'english';
const country = 'Philippines';
const continent = 'Asia';
const isIsland = false;


// Let,Const and Var

// language = 'Tagalog';
// const country = 'Philippines';
// const continent = 'Asia';
// const isIsland = false;

// console.log(language);
// console.log(country);
// console.log(continent);
// console.log(isIsland);

// Basic Operators

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

// qoute use
const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' people speak ' +
    language;

console.log(description1);

// String and Literals Use
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);


// Taking Decisions: if / else Statements
if (population > averageValue) {
    console.log(`${country}'s population is million above average`);
} else {
    console.log(
        `${country}'s population is ${averageValue - population} million below average`
    );
}

// Equality Operators: == vs. ===

const numNeighbours = Number
    (prompt('How many neighbour countries does your contry have?'));

if (numNeighbours == 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More Than 1 border');
} else {
    console.log('No borders')
}

// Logical Operators

if (language && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement

switch (language) {
    case 'mandarin':
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd Place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)
*/
