import React from "react";
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
                <video
                    className="lazy-video"
                    src="https://github.com/soymadip/for-juniors/releases/download/1/lalbari.mp4"
                    loop
                    controls
                >
                    Your browser does not support the video tag. Please use Chrome browser.
                </video>
            </div>
        </div>
    );
};

export default VideoGallery;
