const tempsArray =
[
    { day: 'Monday', high: 66, low: 50},
    { day: 'Tues', high: 74, low: 48},
    { day: 'Wed', high: 71, low: 55},
    { day: 'Thurs', high: 81, low: 69},
    { day: 'Fri', high: 84, low: 61}
];

let lowestDay = tempsArray[0];
let highestDay = tempsArray[0];

tempsArray.forEach(element => {
    if (lowestDay.low > element.low) {
        lowestDay = element;
    }

    if (highestDay.high < element.high) {
        highestDay = element;
    }
});

console.log (`The lowest temperature this week was on ${lowestDay.day} and it was ${lowestDay.low}`);


console.log (`The highest temperature this week was on ${highestDay.day} and it was ${highestDay.high}`);
