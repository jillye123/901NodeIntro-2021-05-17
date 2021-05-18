const timerId = setInterval(() => {
    console.log('Hello')
}, 1000);

setTimeout(() => { clearInterval(timerId); console.log('Finished!') }, 5000)