let events = require('events');
const emitter = new events.EventEmitter();

emitter.on('work', () => {
    console.log('******');
});

emitter.once('work', () => {
    console.log('Clocking in...');
});

emitter.on('work', () => {
    console.log('Write Tests');
    console.log('Code');
    console.log('Refactor');
    console.log('Go to Meeting');
});

emitter.emit('work');
emitter.emit('work');