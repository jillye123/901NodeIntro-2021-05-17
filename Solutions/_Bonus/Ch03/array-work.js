let newArgs = process.argv.slice(2);

newArgs.sort(function(a, b) {
    if(b < a) {
        return -1;
    } else if(b > a) {
        return 1;
    } else {
        return 0;
    }
});

newArgs.forEach(function(arg) {console.log(`${arg}`)});