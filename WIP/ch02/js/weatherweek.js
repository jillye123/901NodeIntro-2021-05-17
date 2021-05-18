const tempsArray = [{ day: "Monday", high: 80,low: 67 } ,
{ day: "Tuesday", high: 76,low: 72 },
{ day: "Wednesday", high: 86,low: 72 } ,
{ day: "Thursday", high: 96,low: 82 } ,
{ day: "Friday", high: 78,low: 68 } ,
{ day: "Saturday", high: 92,low: 85 } ,
{ day: "Sunday", high: 88,low: 72 }   ]

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