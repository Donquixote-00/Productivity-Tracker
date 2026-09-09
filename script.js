const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

startBtn.addEventListener("click", function () {
	console.log("Start clicked!");
});

pauseBtn.addEventListener("click", function () {
	console.log("Pause clicked!");
});

stopBtn.addEventListener("click", function () {
	console.log("Stop clicked!");
});

resetBtn.addEventListener("click", function () {
	console.log("Reset clicked!");
});
