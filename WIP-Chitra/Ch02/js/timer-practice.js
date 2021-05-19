function printHello() {
    console.log("Hello");
}
let timer = setInterval(printHello, 1000);
setTimeout(()=> {
    clearInterval(timer);
    console.log("Finished!");
},5000) 