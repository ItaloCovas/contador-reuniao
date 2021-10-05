const start = document.getElementById('start');
let minutes = 0;
let seconds = 0;
var cron;



function timer() {
    
    seconds++;

    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if(minutes == 3) {
        clearInterval(cron);
        alert('O TEMPO ACABOU!');
    }

    let format = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    document.getElementById('texto').innerText = format;
}


function handleClick() {
    cron = setInterval(timer, 1000);
}


start.addEventListener('click', handleClick);