function printhello(){
    console.log("hello world");
}


let t2=setInterval(printhello,1000)
setTimeout((){
    clearTimeout(t2);
    console.log('cancel timeout')
},5000)