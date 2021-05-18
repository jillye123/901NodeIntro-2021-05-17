let timer = setInterval(function(){console.log("Hello"); }, 1000);

setTimeout(function(){
    console.log("Finished!"); 
    clearInterval(timer);
}, 5000);