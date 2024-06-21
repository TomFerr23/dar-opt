document.getElementById('lottie-button').addEventListener('click', function() {
    var videoContainer = document.querySelector('.video-container');
    var video = document.getElementById('intro-video');
    var loadingAnimation = document.getElementById('loading-animation');

    loadingAnimation.style.display = 'block';
    this.style.display = 'none';

    video.addEventListener('canplay', function() {
        loadingAnimation.style.display = 'none';
        videoContainer.style.display = 'flex';
        video.play();
    });

    videoContainer.style.display = 'flex';
    video.load();
});

document.getElementById('close-video').addEventListener('click', function() {
    var videoContainer = document.querySelector('.video-container');
    var video = document.getElementById('intro-video');
    video.pause();
    videoContainer.style.display = 'none';
    document.getElementById('lottie-button').style.display = 'flex';
});
