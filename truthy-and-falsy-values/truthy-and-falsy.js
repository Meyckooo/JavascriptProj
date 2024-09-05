// 5 falsy values -> 0, '', undefined, null, NaN

// Falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
// Truthy
console.log(Boolean('{}'));
console.log(Boolean('Jonas'));

// Example
const money = 0; // falsy
const moneyTwo = 100; //truthy
 
if(money){
    console.log("Truthy"); 
}else if (moneyTwo){
    console.log('Truthy');
}else{
    console.log('Falsy');
}

let height; // Undefined values
let heightTwo = 1.5; //Defined values

if(height){
    console.log('YAY! Height is DEFINED');
}else if (heightTwo){
    console.log('YAY! Height is DEFINED');
}else{
    console.log('Height is UNDEFINED'); 
}