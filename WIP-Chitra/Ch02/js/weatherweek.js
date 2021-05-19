const weatherArray =  [{ day: "Monday", high: 80,low: 67 } ,
                     { day: "Tuesday", high: 76,low: 72 } , 
                     { day: 'Wednesday', high: 69, low: 65},
                     { day: 'Thursday', high: 100, low: 80},
                     { day: 'Friday', high: 81, low: 77}]

let lowestTempDay = weatherArray[0];
let highestTempDay = weatherArray[0];
weatherArray.forEach(element => {
    if (lowestTempDay.low > element.low) {
        lowestTempDay = element;
    }
    if (highestTempDay.high < element.high) {
        highestTempDay = element;
    }
});

console.log(`The lowest temperature this week was on ${lowestTempDay.day} and it was ${lowestTempDay.low}`);
console.log(`The highest temperature this week was on ${highestTempDay.day} and it was ${highestTempDay.high}`);