var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	console.log("Loop is set to false")
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video")
	// Pause video
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = document.getElementById("slider").value + "%";
 	console.log("Play Video");
	// Play video and update volume
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	var speed = video.playbackRate;
	if(speed >= 0.2) {
		video.playbackRate = speed - .10;
	} else {
		video.playbackRate = 0;
	}

	console.log("Speed is " + video.playbackRate );
	// Pause video
});

document.querySelector("#faster").addEventListener("click", function() {
	
	video.playbackRate += .10;

	console.log("Speed is " + video.playbackRate);
	// Pause video
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if(video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}

	console.log("Video current time is " + video.currentTime);
	// Pause video
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
	
	// Pause video
});

document.querySelector("#slider").addEventListener("change", function() {
	var volume_val = document.getElementById("slider").value;

	document.querySelector("#volume").innerHTML = volume_val + "%";
	video.volume = volume_val / 100;
	console.log("The current value is " + video.volume);
	// Pause video
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool"
	// Pause video
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
	// Pause video
});


