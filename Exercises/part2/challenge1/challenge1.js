const calAverage = (score1, score2, score3) =>{
    return (score1 + score2 + score3)/3;
}

// Test 1
let scoreDolphins = calAverage(44, 23, 71);
let scoreKoalas = calAverage(65, 54, 49);
console.log(`Dolphins Score (${scoreDolphins}) and Koalas Score (${scoreKoalas})`);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins Wins (${avgDolphins} vs ${avgKoalas})`);
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas Wins (${avgKoalas} vs ${avgDolphins})`);
    }else {
        console.log('No Team Wins :(')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2

scoreDolphins = calAverage(85, 54, 41);
scoreKoalas = calAverage(23, 34, 27);
console.log(`Dolphins Score (${scoreDolphins}) and Koalas Score (${scoreKoalas})`);
checkWinner(scoreDolphins, scoreKoalas);