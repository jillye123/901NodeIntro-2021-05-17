setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log('World!');
    }, 0);
}, 0);
console.log('End of program reached');