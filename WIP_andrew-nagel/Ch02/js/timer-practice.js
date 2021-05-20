const timer = setInterval(function() {console.log("Hello")},1000);
// const timerId = setInterval(() => {
//     console.log('Hello')
// }, 1000);

setTimeout(function(){clearInterval(timer); console.log('Finished!')}, 5000);
// setTimeout(() => { clearInterval(timerId); console.log('Finished!') }, 5000)
