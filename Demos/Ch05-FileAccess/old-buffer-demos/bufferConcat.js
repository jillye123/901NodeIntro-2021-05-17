let buffer1 = new Buffer('NodeJS Intro ');
let buffer2 = new Buffer('Data Sources');
let buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());