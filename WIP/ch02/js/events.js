const events = require('events');
const emitter = new events.EventEmitter();

function outputConsole (msg) {
    console.log(msg);
}

const doWorkHandler1 = function() {
    outputConsole('Write Tests');
}

const doWorkHandler2 = function() {
    outputConsole('Code');
}

const doWorkHandler3 = function() {
    outputConsole('Refactor');
}

const doWorkHandler4 = function() {
    outputConsole('Go to meeting');
}

emitter.on('work', () => {
    outputConsole(`********`)
});

emitter.once('work', () => {
    outputConsole(`Clocking in...`);
});

emitter.on('break', () => {
    outputConsole(`Check Emails`)
});

emitter.on('work', doWorkHandler1);
emitter.on('work', doWorkHandler2);
emitter.on('work', doWorkHandler3);
emitter.on('work', doWorkHandler4);

let numCalled = 0;
let timer1 = setInterval(function() {
    //console.log(getRandomInt(1, 20));
    if (getRandomInt(1, 20) == 11) {
        emitter.emit('break');
        numCalled++;
        console.log(`11 was called ${numCalled}`);
    }
    
}, 1000)

setTimeout(() => clearTimeout(timer1), 10000);

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

emitter.emit('work');
emitter.emit('break');
emitter.emit('work');