const event = require('events');

const emitter = new event.EventEmitter();

// const doWorkHandler = function(work) {
//     console.log(`${work}`);
// };

// emitter.on('work', doWorkHandler);
emitter.on('work', (task) => {
    console.log(`${task}`);
});

// emitter.on('work', () => {
//     console.log(`Go to Meeting`);
// });

emitter.on('break', () => {
    console.log(`*******`);
});

emitter.once('check_in', () => {
    console.log(`Clocking in...`)
});

// emitter.on('work', () => {
//     console.log(`Go to Meeting`);
// });

emitter.emit('break');
emitter.emit('check_in');
// emitter.emit('work', doWorkHandler('Write Tests'));
// emitter.emit('work', doWorkHandler('Code'));
// emitter.emit('work', doWorkHandler('Refactor'));
// emitter.emit('work', doWorkHandler('Go to Meeting'));

emitter.emit('work', 'Write Tests');
emitter.emit('work', 'Code');
emitter.emit('work', 'Refactor');
emitter.emit('work', 'Go to Meeting');

emitter.emit('break');

// emitter.emit('work', doWorkHandler('Write Tests'));
// emitter.emit('work', doWorkHandler('Code'));
// emitter.emit('work', doWorkHandler('Refactor'));
// emitter.emit('work', doWorkHandler('Go to Meeting'));

emitter.emit('work', 'Write Tests');
emitter.emit('work', 'Code');
emitter.emit('work', 'Refactor');
emitter.emit('work', 'Go to Meeting');



// emitter.emit('break');
// emitter.emit('work');


console.log(emitter);


