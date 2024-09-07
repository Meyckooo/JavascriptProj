const daySelected = prompt('Enter what is the day today ^_^');

switch(daySelected){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meet up');
    break;
    case 'tuesday':
        console.log('Prepare for theory vidoes');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Vides');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Invalid Day!');
}


// Switch statement turns into if/else statement
if(daySelected == 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meet up');
}else if(daySelected == 'tuesday'){
    console.log('Prepare for theory vidoes');
}else if(daySelected == 'wednesday' || daySelected == 'thursday'){
    console.log('Write code examples');
}else if(daySelected == 'friday'){
    console.log('Record Vides');
}else if(daySelected == 'saturday' || daySelected == 'sunday'){
    console.log('Enjoy the weekend :D');
}else{
    console.log('Invalid Day!');
}
