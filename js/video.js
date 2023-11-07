var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.getElementById('play').addEventListener('click', function() {
	var video = document.getElementById('player1');
	video.play();
  });

document.getElementById('pause').addEventListener('click', function() {
  var video = document.getElementById('player1');
  video.pause();
});

document.getElementById('slower').addEventListener('click', function() {
  var video = document.getElementById('player1');
  video.playbackRate -= 0.1; // Decrease playback rate by 0.1
});

document.getElementById('faster').addEventListener('click', function() {
  var video = document.getElementById('player1');
  video.playbackRate += 0.1; // Increase playback rate by 0.1
});

document.getElementById('skip').addEventListener('click', function() {
	var video = document.getElementById('player1');
	video.currentTime += 10; // Skip ahead by 10 seconds (adjust as needed)
  });
  

  document.getElementById('mute').addEventListener('click', function() {
	var video = document.getElementById('player1');
	video.muted = !video.muted; // Toggle mute state
  });
  
  var slider = document.getElementById('slider');
var volumeText = document.getElementById('volume');
var video = document.getElementById('player1');

slider.addEventListener('input', function() {
  var volume = slider.value / 100;
  video.volume = volume;
  volumeText.textContent = Math.round(volume * 100) + '%';
});

document.getElementById('vintage').addEventListener('click', function() {
	var video = document.querySelector('.video');
	video.classList.add('vintage'); // Assuming you have a CSS class named 'vintage' for the old-school effect
  });

  document.getElementById('orig').addEventListener('click', function() {
	var video = document.querySelector('.video');
	video.classList.remove('vintage'); // Remove the 'vintage' CSS class
  });
  
  
document.querySelector("play").addEventListener("click", function() {
	console.log("Play Video");
});

  


document.addEventListener('DOMContentLoaded', function() {
	var video = document.getElementById('player1');
	var playButton = document.getElementById('play');
	var pauseButton = document.getElementById('pause');
	var slowerButton = document.getElementById('slower');
	var fasterButton = document.getElementById('faster');
	var skipButton = document.getElementById('skip');
	var muteButton = document.getElementById('mute');
	var slider = document.getElementById('slider');
	var volumeText = document.getElementById('volume');
	var vintageButton = document.getElementById('vintage');
	var origButton = document.getElementById('orig');
  
	playButton.addEventListener('click', function() {
	  video.play();
	});
  
	pauseButton.addEventListener('click', function() {
	  video.pause();
	});
  
	slowerButton.addEventListener('click', function() {
	  video.playbackRate -= 0.1;
	});
  
	fasterButton.addEventListener('click', function() {
	  video.playbackRate += 0.1;
	});
  
	skipButton.addEventListener('click', function() {
	  video.currentTime += 10;
	});
  
	muteButton.addEventListener('click', function() {
	  video.muted = !video.muted;
	});
  
	slider.addEventListener('input', function() {
	  var volume = slider.value / 100;
	  video.volume = volume;
	  volumeText.textContent = Math.round(volume * 100) + '%';
	});
  
	vintageButton.addEventListener('click', function() {
	  var video = document.querySelector('.video');
	  video.classList.add('vintage');
	});
  
	origButton.addEventListener('click', function() {
	  var video = document.querySelector('.video');
	  video.classList.remove('vintage');
	});
  });
  