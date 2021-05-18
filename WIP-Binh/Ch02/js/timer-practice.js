
function printHello() {
    console.log("Hello");
}

let time = setInterval(printHello, 1000);

setTimeout(() => {
    clearTimeout(time);
    console.log("Finished!")
}, 5000);
