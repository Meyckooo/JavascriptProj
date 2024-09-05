
const age = 15;

if(age >= 18){
    console.log('Meycko can start driving license');
}else{
    const yearsLeft = 18 - age;
    console.log(`Meycko is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;
let century;

if(birthYear <= 2000){
    century = '20th';
}else{
    century = '21th';
}

console.log(`it is ${century} century`);