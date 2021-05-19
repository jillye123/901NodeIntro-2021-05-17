const events = require("events");

const emitter = new events.EventEmitter();

const event1 = function() {
    console.log("Write Tests");
}

const event2 = function() {
    console.log("Code");
}
const event3 = function() {
    console.log("Refactor");
}
const event4 = function() {
    console.log("Go to Meeting");
}
const event5 = function() {
    console.log("Check Emails");
}

emitter.on('work', () => {
    console.log('*******');
});

emitter.once('work', () => {
    console.log('Clocking in...');
});

emitter.on('work', event1);
emitter.on('work', event2);
emitter.on('work', event3);
emitter.on('work', event4);
emitter.on('work', event5);


emitter.emit('work');
emitter.emit('work');
emitter.emit('break');