let buf = new Buffer('Change this text');
let json = buf.toJSON(buf);

console.log(json);