const calcTip = function (bill) {
    console.log(bill)
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];

let totals = 0;

for(let i = 0; i < bills.length; i++){
    let temp = bills[i]
    totals += calcTip(temp)
}
// console.log(tips);
console.log('total',totals / bills.length);