const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];

let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++){
tips.push(calcTip[i]);
totals.push(bills[i]);
}

console.log(tips);
console.log(totals);