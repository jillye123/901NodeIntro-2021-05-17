let tempData = [
    { day: "Monday", high: 80, low: 67 } ,
    { day: "Tuesday", high: 82, low: 69 } ,
    { day: "Wednesday", high: 86, low: 71 } ,
    { day: "Thursday", high: 78, low: 62 } ,
    { day: "Friday", high: 76, low: 64 }  ];

let currentLow = tempData[0];
let currentHi = tempData[0];

for(let i = 1; i < tempData.length; i++) {
    if(tempData[i].low < currentLow.low) {
        currentLow = tempData[i];
    }
    if(tempData[i].high > currentHi.high) {
        currentHi = tempData[i];
    }
}

console.log(`The lowest temperature this week was on ${currentLow.day}} and it was ${currentLow.low}!`);
console.log(`The lowest temperature this week was on ${currentHi.day}} and it was ${currentHi.high}!`);
