// Type Conversion
const inputYear = 1991;
console.log(Number(inputYear), inputYear); //1991 1991
console.log(Number(inputYear) + 18);// 2009

console.log(String('Jonas')); // Jonas

// Type Coercion
// Addition in a string will work but it will add besides the number 
// Number on a string '' will work if it's a number
console.log('I am ' + 23 + ' Years Old' );
console.log('23' + '10' + 3) //23103
console.log('23' - '10' - 3) // 10
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1; //11
n = n - 1; // n = n = 11 - 1 = 1
console.log(n); //10