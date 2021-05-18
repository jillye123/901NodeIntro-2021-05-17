const tempArray = [
    { day: "Monday", high: 80,low: 67 } ,
    { day: "Tuesday", high: 76,low: 72 } ,
    { day: "Wednesday", high: 75, low: 65 } ,
    { day: "Thursday", high: 102, low: 69 } ,
    { day: "Friday", high: 79, low: 66 }
];

let lowestDay = tempArray[0];
let highestDay = tempArray[0];

tempArray.forEach(element => {
    if (lowestDay.low > element.low) {
        lowestDay = element;
    }

    if (highestDay.high < element.high) {
        highestDay = element;
    }
});

console.log(`The lowest tempurature this week was on ${lowestDay.day} and it was ${lowestDay.low}`);
console.log(`The highest tempurature this week was on ${highestDay.day} and it was ${highestDay.high}`);