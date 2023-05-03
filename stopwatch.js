let seconds = 0
let milliseconds = 0
let minutes = 0
let digits = document.getElementById('digits')
let interval;
let startButton = document.getElementById("start-btn")
let stopButton = document.getElementById("stop-btn")
let lapButton = document.getElementById('lapList')
stopButton.disabled = true
lapButton.disabled = true
function start() {

    startButton.disabled = true 
    stopButton.disabled = false
    lapButton.disabled = false
     

    
    interval = setInterval(function (){
        milliseconds = milliseconds + 10
    if (milliseconds >= 1000){
        seconds = seconds + 1
        milliseconds = 0
    }
    if(seconds>= 60){
        minutes = minutes + 1
        seconds = 0
    }
    
    digits.innerHTML = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':' + String(milliseconds / 10).padStart(2, '0')

},10)
}
function stop(){
   clearInterval(interval)
   stopButton.disabled = true
   startButton.disabled = false
   lapButton.disabled = true
    
}
function reset(){
   stop()
   milliseconds = 0
   seconds = 0
   minutes = 0
   digits.innerHTML = "00:00:00"  
   const lapList = document.getElementById("lapList1")
   lapList.innerHTML = ""
   lapButton.disabled = true

}
function addlap(){
    let newListItem = document.createElement("li")
    newListItem.textContent = digits.textContent
    const lapList = document.getElementById("lapList1")
    lapList.appendChild(newListItem);
}

