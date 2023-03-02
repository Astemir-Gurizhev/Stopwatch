let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
  timerInterval = setInterval(incrementTimer, 1000);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerElement.innerText = '00:00:00';
  startButton.disabled = false;
}

function incrementTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const hoursDisplay = hours < 10 ? `0${hours}` : hours;
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

  timerElement.innerText = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
