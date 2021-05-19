const timerId = setInterval(() => {
    console.log('Chill!!')
}, 1000);

setTimeout(() => { clearInterval(timerId); console.log('Done..Dude!') }, 5000)