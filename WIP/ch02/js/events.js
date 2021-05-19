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



emitter.emit('work');
emitter.emit('break');
emitter.emit('work');