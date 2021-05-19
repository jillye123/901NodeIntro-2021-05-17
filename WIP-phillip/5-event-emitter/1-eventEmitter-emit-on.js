// import events module
const events = require('events');
// create an event emitter object
const emitter = new events.EventEmitter();
// create ane event handler
const handler1 = function() {
    console.log('write tests');
}
const handler2 = function() {
    console.log('Coding');
}
const handler3 = function() {
    console.log('refactoring');
}
const handler4 = function() {
    console.log('check emails');
}
// bind the connection event with the handler
emitter.on('work', () => {
    console.log('clocking in....');
});
emitter.on('work', handler1);
emitter.on('work', handler2);
emitter.on('work', handler3);

emitter.prependOnceListener('work', () => {
    console.log('go to meeting');
});

emitter.on('work', handler4);
emitter.on('break', () => {
    console.log('********');
})
emitter.on('work', handler4);

emitter.emit('work');
emitter.emit('work');
emitter.emit('break');