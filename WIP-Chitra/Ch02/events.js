const events = require('events');
const emitter = new events.EventEmitter();

const testHandler = function() {
    console.log("Write Tests");
}

const codeHandler = function() {
    console.log("Code");
}

const refactorHandler = function() {
    console.log("Refactor");
}

const meetingHandler = function() {
    console.log("Go to Meeting");
}

const emailHandler = function() {
    console.log("Check Emails");
}

emitter.on('work', ()=> {
    console.log("*************");
})

emitter.once('work', () => {
    console.log("Clocking in....");
})

emitter.on('work',testHandler);
emitter.on('work', codeHandler);
emitter.on('work', refactorHandler);
emitter.on('work', meetingHandler);
emitter.on('work', emailHandler);

emitter.on('break', () => {
    console.log("*************");
})

emitter.on('break', emailHandler);

emitter.emit('work');
emitter.emit('work');
emitter.emit('break');