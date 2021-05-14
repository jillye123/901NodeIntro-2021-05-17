let buffer1 = new Buffer('NodeJS Intro');

//slicing a buffer
let buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());