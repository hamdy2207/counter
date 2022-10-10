

const input = document.querySelector('.the-birthday');
const secEl = document.getElementById('SEC-h');
const minEl = document.getElementById('MINS-h');
const hourEl = document.getElementById('HOURS-h');
const dayEl = document.getElementById('DAYS-h');
const monthEl = document.getElementById('MONTH-h');

var currentYear = new Date().getFullYear();
console.log(currentYear);



function countdown() {

    "use strict";

    // console.log(val.value)
    var newBirthDay = new Date(`${currentYear + 1}`);
    var toDay = new Date();
    const seconds = Math.floor((newBirthDay - toDay) / 1000);


    const sec = Math.floor(seconds) % 60;
    const mins = Math.floor(seconds / 60) % 60;
    const hours = Math.floor(seconds / 3600) % 24;
    const days = Math.floor(seconds / 3600/24) % 30;
    const months = Math.floor(seconds /3600 / 24 /30);


        
    secEl.innerHTML = formatTime(sec);
    minEl.innerHTML =formatTime(mins);
    hourEl.innerHTML =formatTime(hours);
    dayEl.innerHTML = days;
    monthEl.innerHTML = months;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

countdown();

setInterval(countdown, 1000);
