console.log( " filrename: " + __filename);
console.log( " direct name: " + __dirname);

console.log( " process.argv[0]: " + process.argv[0]);
console.log( " process.argv[1]: " + process.argv[1]);
console.log( " Number of inputs are: " + process.argv.length);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

process.argv.forEach(element => {
    console.log(element); 
 });
 