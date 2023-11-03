const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")
const PauseBtn= document.querySelector("#PauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId = 0
let secs = 0
let mins = 0
let hrs = 0

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false
    startTime = Date.now() - elapsedTime
    intervalId = setInterval(updateTime , 75)
  
  }
})
PauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true
    elapsedTime = Date.now() - startTime
    clearInterval(intervalId)
  }
})
resetBtn.addEventListener("click", () => {
  paused = true
  clearInterval(intervalId)
   startTime = 0
   elapsedTime = 0
   currentTime = 0
   secs = 0
   mins = 0
   hrs = 0  
   timeDisplay.textContent = "00:00:00"
})

function updateTime() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24); // Modulo 24 for hours
  hrs = pad(hrs);
  mins = pad(mins);
  secs = pad(secs);
  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
  
  function pad(unit) {
    return (("0")+ unit).length > 2 ? unit : "0" + unit
  }
}


