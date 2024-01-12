let timer;
let seconds = 0;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const displayTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    remainingSeconds
  )}`;
  document.getElementById("display").innerText = displayTime;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
