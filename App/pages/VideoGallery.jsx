import "../index.css";

const VideoGallery = () => {
    return (
        <div className="video-gallery-container">
            <h2 className="video-gallery-h2">Music Video</h2>
            <p className="video-gallery-p">
                ( For the first time ever, we made a theme song, yes, Lalbari's own song
                named as "
                <a href="https://www.youtube.com/watch?v=GV5gTDwQ_yA">
                    Bhalobasar Lalbari
                </a>
                " )
            </p>
            <div className="video-gallery">
                <iframe
                    className="lazy-video"
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/GV5gTDwQ_yA?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoGallery;
