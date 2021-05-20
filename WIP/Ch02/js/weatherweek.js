const tempsArray =
    [
        { day: 'Monday', high: 80, low: 68 },
        { day: 'Tues', high: 89, low: 77 },
        { day: 'Wed', high: 69, low: 65 },
        { day: 'Thurs', high: 102, low: 90 },
        { day: 'Fri', high: 83, low: 78 },
        { day: "Saturday", high: 80, low: 67 },
        { day: "Sunday", high: 76, low: 72 }
    ];

let max = Math.max.apply(null, tempsArray.map(e => e.high));
console.log(`Highest temperature in the week is ${max}`);

let min = Math.min.apply(null, tempsArray.map(e => e.low));
console.log(`Lowest temperature in the week is ${min}`);

let highestTempDay = tempsArray.find(e => {
    return e.high == max;
});

let lowestTempDay = tempsArray.find(e => {
    return e.low == min;
});

console.log(`The lowest temperature this week is on ${lowestTempDay.day} and it was ${lowestTempDay.low}`);

console.log(`The highest temperature this week is on ${highestTempDay.day} and it was ${highestTempDay.high}`);

console.groupCollapsed("********** start sorting by low temperature ********** ");
tempsArray.sort((a, b) => {
    return a.low - b.low;
});

tempsArray.forEach(e => {
    console.log(e);
})

console.groupEnd;