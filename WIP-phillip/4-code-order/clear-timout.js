setTimeout(printA, 2000);
function printA () {
    console.log("A");
}
function printB () {
    console.log("B");
}
let t2 = setInterval(printB, 1000);
setTimeout(() => {
    clearInterval(t2);
    console.log('cancelled timeout')
}, 5000);