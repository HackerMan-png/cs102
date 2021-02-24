let running = false
let lap = false
let time = 0
let seconds = 0
let minutes = 0
let hours = 0
let interval;


function startStop() {
    if (running == false) {
        startTimer()
    }else{
        stopTimer()
    }
}

function startTimer() {
    running = true
    interval = setInterval(function () {
        time++

        if (time >= 100) {
            time -= 100
            seconds += 1
        }
        
        if (seconds >= 60) {
            seconds -= 60
            minutes += 1
        }
        if (minutes >= 60) {
            minutes -= 60
            hours += 1
        }
        let tempSecs; 
        let tempMins;
        let tempHrs;
        if(lap == false){
            if(seconds < 10){
                tempSecs = "0" + seconds
            }else if(seconds >= 10){
                tempSecs = seconds
            }
            if(minutes < 10){
                tempMins = "0" + minutes
            }else if(minutes >= 10){
                tempMins = minutes
            }
            if(hours < 10){
                tempHrs = "0" + hours
            }else if(hours >= 10){
                tempHrs = hours
            }
            timer.textContent = `${tempHrs}:${tempMins}:${tempSecs}:${time}`
        }
    }, 10)
}
function stopTimer() {
    clearInterval(interval)
    running = false
    // startStop()
}

function resetLap(){
    if(running == true){
        if(lap == false){
            lap = true
        }else{
            lap = false
        }
    }else{
			clearInterval(interval)
			time = 0
			seconds = 0
			minutes = 0
			hours = 0
			timer.textContent = `00:00:00:00`
		}
}