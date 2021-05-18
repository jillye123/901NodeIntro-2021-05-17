const tempsArray =
[
    { day: 'Monday', high: 90, low: 68},
    { day: 'Tues', high: 89, low: 77},
    { day: 'Wed', high: 69, low: 69},
    { day: 'Thurs', high: 80, low: 90},
    { day: 'Fri', high: 93, low: 78}
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
