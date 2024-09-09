const teamDolphinsScore = (97 + 112 + 101) / 3;
const teamKoalasScore = (109 + 95 + 106) / 3;
const minimumAverage = 100;

console.log(`Team Dolphins AverageScore is ${teamDolphinsScore}`);
console.log(`Team Koalas AverageScore is ${teamKoalasScore}`);

if(teamDolphinsScore > teamKoalasScore && teamDolphinsScore >= minimumAverage){
    console.log(`Team Dolphins Wins! has AverageScore of ${teamDolphinsScore} and minimum or above minimum of ${minimumAverage};`);
}else if(teamKoalasScore > teamDolphinsScore && teamKoalasScore >= minimumAverage){
    console.log(`Team Koalas Wins! has AverageScore of ${teamKoalasScore} and minimum or above minimum of ${minimumAverage};`);
}
else if(teamDolphinsScore > teamKoalasScore && teamDolphinsScore <= minimumAverage){
    console.log(`Team Koalas Wins! has AverageScore of ${teamDolphinsScore} and minimum or at least minimum of ${minimumAverage};`);
}
else if(teamKoalasScore > teamDolphinsScore && teamKoalasScore <= minimumAverage){
    console.log(`Team Koalas Wins! has AverageScore of ${teamKoalasScore} and minimum or at least minimum of ${minimumAverage};`);
}else if (teamDolphinsScore === teamKoalasScore){
    console.log('Both Teams has the same AverageScore less than or greater than or equal to 100');
}else{
    console.log('No one won the trophy!!')
}