const go_out = "1 May 2023"
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
function countDownTime() {
    const newDate = new Date(go_out)
    const currentDate = new Date()
    const totalSeconds = (newDate - currentDate) / 1000; 
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}

// initial call

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDownTime()

setInterval(countDownTime, 1000)
