const friends = ['Meycko', 'Mike', 'Xaviery'];

// Push method function = to add an element at the last of array

let newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Unshift method function = to add an element at the first array

newLength = friends.unshift('John');
console.log(friends);
console.log(newLength);

// Pop method functions = to remove an element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift method function = to remove an element at the first array
friends.shift();
console.log(friends);

// to find out in what number of array belongs steven
console.log(friends.indexOf('Mike'));
console.log(friends.indexOf('Bob'));

// Includes Functions is a boolean value (True/False) if naa siya sa array or wala
console.log(friends.includes('Mike'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes(23));
console.log(friends);

if(friends.includes('Meycko')){
    console.log('You have a friend called Meycko')
}