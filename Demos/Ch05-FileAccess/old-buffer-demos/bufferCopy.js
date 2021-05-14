let buffer1 = new Buffer('ABC');

//copy a buffer
let buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());