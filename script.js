/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

var clueHoldTime = 1000;
var pattern = [
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
  Math.round(Math.random(5) * 5) + 1,
];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1;
var guessCounter = 0;
var mistakes = 0;
var timeLeft = 3;
let intervalID;

function startGame() {
  mistakes = 0;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clueHoldTime = 1000;
  clearTimer();
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 300.0,
  6: 420.0,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime * 0.95;
  }
  setTimeout(setTimer, delay - 800);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function countdown() {
  if (timeLeft == 0) {
    document.getElementById("timer").innerHTML = "0";
    loseGame();
  }
  document.getElementById("timer").innerHTML = timeLeft;
  timeLeft = timeLeft - 1;
}

function setTimer() {
  intervalID = setInterval(countdown, 1000);
}

function clearTimer() {
  clearInterval(intervalID);
  timeLeft = 3;
  document.getElementById("timer").innerHTML = timeLeft;
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        clearTimer();
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (mistakes < 2) {
      mistakes++;
      alert("wrong, strike" + mistakes + " of 3");
      clearTimer();
      setTimer();
    } else {
      loseGame();
    }
  }
}
