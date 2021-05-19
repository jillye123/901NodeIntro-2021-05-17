let events = require('events')
let emitter = new events.EventEmitter();

const doWorkHandler1 = function() {
    console.log('Check Email');
}

const doWorkHandler2 = function() {
    console.log('Go to Meeting');
}

const doWorkHandler3 = function() {
    console.log('Run Validation Tests');
}

const doWorkHandler4 = function() {
    console.log('Code Program');
}

emitter.on('work', () => { console.log('*******') });
emitter.once('work', () => {
    console.log('work');
});
emitter.on('work', doWorkHandler1);
emitter.on('work', doWorkHandler2);
emitter.on('work', doWorkHandler3);
emitter.on('work', doWorkHandler4);
emitter.on('work', () => {
    console.log('Go to Meeting');

});

print console.log