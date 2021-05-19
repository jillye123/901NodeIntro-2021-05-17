

console.log("Filename " +  __filename);
console.log("DIR " + __dirname);
console.log("arg1 " + process.argv[0] )
console.log("arg2 " + process.argv[1] )


console.log(__dirname);


process.argv.forEach(element => {
   console.log(element); 
});
