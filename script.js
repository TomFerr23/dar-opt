document.getElementById('lottie-button').addEventListener('click', function() {
    var videoContainer = document.querySelector('.video-container');
    var video = document.getElementById('intro-video');
    var loadingAnimation = document.getElementById('loading-animation');

    videoContainer.style.display = 'none';
    loadingAnimation.style.display = 'block';
    this.style.display = 'none';

    video.addEventListener('canplay', function() {
        loadingAnimation.style.display = 'none';
        videoContainer.style.display = 'flex';
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
        video.play();
    });

    video.load();
});

document.getElementById('close-video').addEventListener('click', function() {
    var videoContainer = document.querySelector('.video-container');
    var video = document.getElementById('intro-video');
    video.pause();
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
    videoContainer.style.display = 'none';
    document.getElementById('lottie-button').style.display = 'flex';
});
