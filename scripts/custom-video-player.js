
document.addEventListener("DOMContentLoaded", () => {

	const player = document.getElementById("player");
	const playerContainer = document.getElementById("video-container");
    const controls = document.getElementById("controls");
    const video = document.getElementById("video");
    const play = document.getElementById("play");
	const loop = document.getElementById("loop");
    const sound = document.getElementById("sound");
    const progress = document.getElementById("progress");
    const current = document.getElementById("current");
    const duration = document.getElementById("duration");
    const fullscreen = document.getElementById("fullscreen");


    const playIMG = document.getElementById("play-img");
	const soundIMG = document.getElementById("sound-img");
    const loopIMG = document.getElementById("loop-img");
    const fullscreenIMG = document.getElementById("fullscreen-img");

    // Format seconds into minutes and seconds
    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) return "0:00";

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${mins}:${String(secs).padStart(2, "0")}`;
    }

    // Play / Pause
    play.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

	video.addEventListener("click", () => {
	    if (video.paused) {
	        video.play();
	    } else {
	        video.pause();
	    }
	});

    video.addEventListener("play", () => {
        playIMG.src = "assets/icons/player/pause.svg";
    });

    video.addEventListener("pause", () => {
        playIMG.src = "assets/icons/player/play.svg";
    });

    // Update playback time and progress
    video.addEventListener("timeupdate", () => {
        current.textContent = formatTime(video.currentTime);

        if (video.duration) {
            progress.value =
                (video.currentTime / video.duration) * 100;
        }
    });

    // Load duration
    video.addEventListener("loadedmetadata", () => {
        duration.textContent = formatTime(video.duration);
    });

    // Seek through video
    progress.addEventListener("input", () => {
        if (video.duration) {
            video.currentTime =
                (progress.value / 100) * video.duration;
        }
    });

	// Mute / Unmute
    sound.addEventListener("click", () => {
        video.muted = !video.muted;
        soundIMG.src = video.muted ? "assets/icons/player/sound-off.svg" : "assets/icons/player/sound-on.svg";
        soundIMG.style = video.muted ? "opacity: 0.33" : "opacity: 1.0";
    });

	// Mute / Unmute
    loop.addEventListener("click", () => {
        video.loop = !video.loop;
        loopIMG.style = video.loop ? "opacity: 1.0" : "opacity: 0.33";
    });

    // Fullscreen
    fullscreen.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            player.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Update fullscreen button
    document.addEventListener("fullscreenchange", () => {
        fullscreenIMG.src =
            document.fullscreenElement ? "assets/icons/player/fullscreen-exit.svg" : "assets/icons/player/fullscreen-enter.svg";
        controls.style =
            document.fullscreenElement ? "background: linear-gradient(to bottom, #00000000, #000000a0); position: absolute;" : "background-color: #333333; position: relative;";
        videoContainer.style =
            document.fullscreenElement ? "position: absolute;" : "position: relative;";
    });

});
