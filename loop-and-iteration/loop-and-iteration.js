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


