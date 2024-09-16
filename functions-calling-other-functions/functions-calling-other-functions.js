/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;


if (retirement > 0){
    console.log(`${firstname} retire in ${retirement} years`);
    return retirement;
}else{
    console.log(`${firstName} has already retired`);
    return -1;
}
}

console.log(yearsUntilRetirement(1991, 'Meycko'));
console.log(yearsUntilRetirement(1950, 'Mike'));