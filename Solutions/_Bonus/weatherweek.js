const weatherOfTheWeek = [
    {day:"Monday", high:100, low:60},
    {day:"Tuesday", high:95, low:50},
    {day:"Wednesday", high:65, low:40},
    {day:"Thursday", high:70, low:60},
    {day:"Friday", high:75, low:50},
    {day:"Saturday", high:80, low:70},
    {day:"Sunday", high:90, low:45}

];

let lowest = weatherOfTheWeek[0];
let highest = weatherOfTheWeek[0];

weatherOfTheWeek.forEach(element => {
    if(lowest.low > element.low){
        lowest = element;
    }

    if (highest.high < element.high){
        highest = element;
    }
});

console.log(`The lowest temperature this week was on ${lowest.day} and it was ${lowest.low}`);
console.log(`The highest temperature this week was on ${highest.day} and it was ${highest.high}` )