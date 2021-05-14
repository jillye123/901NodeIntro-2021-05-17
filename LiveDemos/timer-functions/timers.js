
let counter = 0;
let timerID = setInterval(() => {
    let x = ++counter;
    console.log('Hi', x);
}, 1000);

console.log('End of program');

setTimeout(() => {
    clearInterval(timerID)
}, 5000);

setInterval(() => {
    let x = ++counter;
    console.log('Bye', x);
    if (x>5) {
        process.exit()

    }
}, 1000);