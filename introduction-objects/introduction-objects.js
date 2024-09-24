// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Meycko', 'Mike', 'Xaviery'],
// ];

/*

// Object Property
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Meycko', 'Mike', 'Xaviery'],
};

console.log(jonas);

// Dot Notation
console.log(jonas.firstName + jonas.lastName);

// Bracket Notation
console.log(jonas['firstName'] + jonas['lastName']);


const interestedIn = prompt('What do you wnat to know about Jonas? Choose between firstName, lastName, age, job, friends');

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, friends.')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemdtman';
console.log(jonas);


// Challenge
// "Jonas has 3 friends, and his best friends is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}`);
*/


// Object Methos

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Meycko', 'Mike', 'Xaviery'],
    hasDriversLicense: true,

    // calcAge: function (birthYear){
    //     return 2037 - birthYear;
    // }

    calcAge: function (){
        console.log(this);
        return 2037 - this.birthYear;
    }
};

console.log(jonas.calcAge(1991));

// console.log(jonas['calcAge'](1991));
