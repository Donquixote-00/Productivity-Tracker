let isRunning = false;
let seconds = 0;
let timerId = null;

const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

startBtn.addEventListener("click", function () {
	if (isRunning === true) {
		return;
	}
	isRunning = true;
	timerId = setInterval(function () {
		seconds = seconds + 1;
		console.log(seconds);
	}, 1000);
});

pauseBtn.addEventListener("click", function () {
	clearInterval(timerId);
	isRunning = false;
	console.log("Paused!");
});

stopBtn.addEventListener("click", function () {
	console.log("Stop clicked!");
});

resetBtn.addEventListener("click", function () {
	console.log("Reset clicked!");
});
