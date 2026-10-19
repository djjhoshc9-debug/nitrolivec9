function initPlayer()  {
    const playStopButton = document.getElementById('playStopButton');
    const audio = document.getElementById('audio');
    const loader = document.getElementById('loader');

    let isPlaying = false;

    playStopButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    });

    audio.addEventListener('playing', () => {
        isPlaying = true;
        playStopButton.src = '/blog/radio/stop.webp';
        loader.style.display = 'block';
    });

    audio.addEventListener('pause', () => {
        isPlaying = false;
        playStopButton.src = '/blog/radio/play.webp';
        loader.style.display = 'none';
        audio.currentTime = 0;
    });

    audio.addEventListener('stalled', () => {
        isPlaying = false;
        playStopButton.src = '/blog/radio/play.webp';
        loader.style.display = 'none';
    });

    audio.addEventListener('error', () => {
        isPlaying = false;
        playStopButton.src = '/blog/radio/play.webp';
        loader.style.display = 'none';
    });
};
document.addEventListener('DOMContentLoaded', initPlayer);
document.addEventListener('astro:page-load', initPlayer);

