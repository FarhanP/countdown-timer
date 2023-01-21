const countDownInput = document.querySelector(".countdown-input");
const countdownTimer = document.querySelector(".countdown-timer");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
let startMin = 0;
let timerCount = 0;
let myTimerInterval;

// Set the counter value
startBtn.addEventListener("click", () => {
  if (countDownInput.value.length > 0) {
    startMin = countDownInput.value;
    timerCount = startMin * 60;
    // Start the counter
    myTimerInterval = setInterval(() => {
      if (timerCount > 0) calcTimeDifference();
    }, 1000);
  }
});

//  Reset the counter
resetBtn.addEventListener("click", () => {
  countdownTimer.innerHTML = "00:00";
  countDownInput.value = "";
  clearInterval(myTimerInterval);
});

// Calculate the time pending`
function calcTimeDifference() {
  let mins = Math.floor(timerCount / 60);
  let sec = timerCount % 60;
  sec = sec < 10 ? "0" + sec : sec;
  countdownTimer.innerHTML = `${mins}:${sec}`;
  timerCount--;
}
