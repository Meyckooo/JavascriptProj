// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Meycko', 'Mike', 'Xaviery'],
// ];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Meycko', 'Mike', 'Xaviery'],
};

console.log(jonas);

// Dot 
console.log(jonas.firstName + jonas.lastName);

// Bracket Notation
console.log(jonas['firstName'] + jonas['lastName']);


const interestedIn = prompt('What do you wnat to know about Jonas? Choose between firstName, lastName, age, job, friends');

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Jonas does not have information about this.')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemdtman';
console.log(jonas);


// Challenge
// "Jonas has 3 friends, and his best friends is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}`);