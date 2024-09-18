const friend1 = 'Meycko';
const friend2 = 'Mike';
const friend3 = 'Xaviery';

const friends = ['Meycko', 'Mike', 'Xaviery'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1])

//Replacing the number 2 in array
friends[2] = 'Jay';
console.log(friends);

// Illegal value to overwrite the code above kay const gamit niya
// friends = ['Bob', 'Alice']


const firstName = 'Jonas';

const jonas = [firstName, 'Schmedtmann' , 2037 - 1991, 'teacher', friends[0]];
console.log(jonas);
console.log(jonas.length);


// Exercise

const calcAge = birthYeah => 2037 - birthYeah;

const years = [1990, 1967, 2002, 2010, 2018];

// Subtract the length from 5 array to -1
let age1 = calcAge(years[years.length - 5]);
let age2 = calcAge(years[years.length - 4]);
let age3 = calcAge(years[years.length - 3]);
let age4 = calcAge(years[years.length - 2]);

console.log(age1, age2, age3,age4);

const ages = [age1, age2, age3, age4];
console.log(ages);

// target the number of array
age1 = calcAge(years[0]);
age2 = calcAge(years[1]);
age3 = calcAge(years[2]);
age4 = calcAge(years[3]);

console.log(age1, age2, age3,age4);