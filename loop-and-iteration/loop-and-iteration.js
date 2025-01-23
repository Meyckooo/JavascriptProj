const meyckoArray = [
    'Meycko',
    'Canoy',
    2025 - 2001,
    10,
    'Developr',
    ['Micheal', 'Peter', 'Steven'],
    true,
];

const types = [];

for (let i = 0; i < meyckoArray.length; i++){
    console.log(meyckoArray[i], typeof meyckoArray[i]);

    // Filling Types Array
    // types[i] = typeof meyckoArray[i];

    types.push(typeof meyckoArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2025 - years[i]);
}
console.log(ages);

//Continue and Break

//CONTINUE
console.log('--- ONLY STRING ---');

for (let i = 0; i < meyckoArray.length; i++){
if(typeof meyckoArray[i] !== 'string') continue;
    console.log(meyckoArray[i], typeof meyckoArray[i]);
}

//BREAK
console.log('--- BREAK WITH NUMBERS ---');

for (let i = 0; i < meyckoArray.length; i++){
if(typeof meyckoArray[i] === 'number') break;
console.log(meyckoArray[i], typeof meyckoArray[i]);
}


// LOOP BACKWARDS AND LOOPS IN LOOPS

console.log('--- LOOP BACKWARDS ---');

for (let i = meyckoArray.length -1; i >= 0; i--){
    console.log(i, meyckoArray[i]);
}

console.log('--- AND LOOPS IN LOOPS ---');

for(let exercise = 1; exercise < 6; exercise++){
    console.log(`------ Starting Exercise ${exercise} -----`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} Lifting Weight Repetition of ${rep}`);
    }
}

console.log('--- WHILE LOOP ---');

let piece = 1;
const fruits = [
    'Orange',
    'Apple',
    'Avocado',
    'Mango'
];

while(piece < fruits.length){
    console.log(`${piece} Piece of ${fruits[piece]}`);
    piece++;
}

let dice = Math.trunc(Math.random() *6) + 1;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('Loop is about to end...');
    }
}