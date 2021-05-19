// Import events module
const events = require('events');

// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

//const doWorkHandler1 = function() {
//    console.log('Checking in');
//}

const doWorkHandler1 = function() {
    console.log('Write Tests');
}

const doWorkHandler2 = function() {
    console.log('Code');
}

const doWorkHandler3 = function() {
    console.log('Refactor');
}

const doWorkHandler4 = function() {
    console.log('Go To Meeting');
}


eventEmitter.on('work', () => { console.log('*******') });
eventEmitter.once('work', () => {
    console.log('Clocking in...');
});
eventEmitter.on('work', doWorkHandler1);
eventEmitter.on('work', doWorkHandler2);
eventEmitter.on('work', doWorkHandler3);
eventEmitter.on('work', doWorkHandler4);


eventEmitter.on('break', () => { console.log('...') });


eventEmitter.emit('work');
eventEmitter.emit('work');
eventEmitter.emit('break');
