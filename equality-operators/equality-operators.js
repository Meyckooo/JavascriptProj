//Strict operator -> ===
//loose operator -> ==

const ageMale = 21;
const askAge = Number(prompt("What is your age?"));
console.log(askAge);

if(askAge === 18){
    console.log('Example of Strict Operator')
    console.log('Cool! You are 18 years old (Strict operator)') // you cannot use string on this  operator
}else if(askAge === 21){
    console.log('Example of Strict Operator')
    console.log('Cool! You are 21 years old (Strict operator)') // you cannot use string on this  operator
}
else if(askAge === 27){
    console.log('Example of Strict Operator')
    console.log('Cool! You are 27 years old (Strict operator)') // you cannot use string on this  operator
}else{
    console.log('Example of loose Operator')
    console.log('You are not 18 or 21 or 27 years old (loose operator)') //you can use string on this operator
}


