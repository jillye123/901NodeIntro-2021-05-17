console.log("filename:", __filename );

console.log("dirname :", __dirname );

console.log("process.argv[0]=",process.argv[0]);

console.log("process.argv[1]=",process.argv[1]);


process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

