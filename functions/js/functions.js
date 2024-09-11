// this code is for strict or can find any errors of your code
'using strict';

console.log('Introduction of Functions');
// Introduction of Functions

function logger(){
    console.log('My name is Meycko');
}

function logger2(){
    console.log('My name is Mike');
}
// Calling / Running / Invoking Function
logger();
logger2();


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


