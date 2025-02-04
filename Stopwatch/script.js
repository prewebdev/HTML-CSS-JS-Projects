let hour,
timer,
minutes,
seconds,
interval;

let getSeconds = 0,
    getMinute = 0,
    getHours = 0;

function stopwatch() {
    this.start = function() {
        hour = document.getElementById("hour");
        minute = document.getElementById("minute");
        seconds = document.getElementById("seconds");

        if (getSeconds >= 0) {
            getSeconds++;
            seconds.innerHTML = getSeconds;
        }
        if (getSeconds < 10) {
            seconds.innerHTML = "0" + getSeconds;
        }
        if (getSeconds >= 60) {
            getSeconds = 0;
            getMinute++;
            minute.innerHTML = getMinutes;
        }
        if (getMinute < 10) {
            minute.innerHTML = "0" + getMinutes + ":";
        }
        if (getMinutes >= 60) {
            getMinutes = 0;
            getHours++;
            hour.innerHTML = getHours;
        }
        if (getHours < 10) {
            hour.innerHTML = "0" + getHours + ":"
        }
        interval = setTimeout(object.start, 1000);
    }
    this.stop = function() {
        clearTimeout(interval);
    } // stop the watch
this.reset = function() {
    if (getSeconds >= 0) {
        getSeconds = 0;
        getHours = 0;
        getMinutes = 0;

        seconds.innerHTML = "0" + getSeconds;
        minute.innerHTML = "0" + getMinutes + " :"
        hour.innerHTML = "0" + getHours + " :"
        clearTimeout(interval);
    }
}
}
let object = new stopwatch();