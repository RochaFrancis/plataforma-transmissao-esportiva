document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('live-video');

    // URL do streaming de vídeo ao vivo
    const liveStreamUrl = 'URL_DO_SEU_STREAMING';

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(liveStreamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = liveStreamUrl;
        video.addEventListener('canplay', () => {
            video.play();
        });
    }
});
