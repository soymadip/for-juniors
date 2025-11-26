import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showGiftMessage, setShowGiftMessage] = useState(false);
  const videoRef = useRef(null);
  const memesSectionRef = useRef(null);

  const handleScrollClick = () => {
    memesSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleGiftClick = () => {
    setShowModal(true);
    setShowGiftMessage(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  const handleTimeUpdate = () => {
    if (
      videoRef.current &&
      videoRef.current.currentTime >= videoRef.current.duration / 2.6
    ) {
      setShowGiftMessage(true);
    }
  };

  return (
    <>
      <header>
        <img src={`${BASE_URL}cts.png`} width="55px" alt="" />
        <br />
        <div>
          <img src={`${BASE_URL}dcst.png`} width="33px" />
          <img src={`${BASE_URL}c.png`} width="32px" />
          <img src={`${BASE_URL}js.png`} width="30px" />
          <img src={`${BASE_URL}12.png`} width="31px" />
        </div>
      </header>

      <main>
        <div className="more">
          <div className="content-wrapper">
            <img src={`${BASE_URL}character.png`} width="200px" />
            <p>Aro&nbsp;gift&nbsp;lagbe?</p>
            <p>&nbsp;</p>
            <br />
            <div
              className="scroll-indicator"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={handleScrollClick}
            >
              <p>Then Tap here</p>
              <div className="arrow"></div>
            </div>
          </div>
        </div>

        <div id="memes-section" ref={memesSectionRef}>
          <p>
            <br />
          </p>
          <h1>Memes You can relate</h1>
          <p>( laugh now, you will relate later 😁 )</p>
        </div>
        <div className="gallery">
          <img src={`${BASE_URL}meme/meme.jpeg`} alt="Meme 1" />
          <br />
          <img src={`${BASE_URL}meme/2.jpg`} alt="Meme 2" />
          <br />
          <img src={`${BASE_URL}meme/3.jpg`} alt="Meme 3" />
          <br />
          <img src={`${BASE_URL}meme/4.jpg`} alt="Meme 3" />
          <br />
        </div>

        <div className="more-videos">
          <p>Ekhono&nbsp;gift&nbsp;chai?</p>
        </div>

        <div className="more-videos2">
          <p>Ekhono&nbsp;Scroll&nbsp;korchis?</p>
        </div>

        <div className="more-videos3">
          <p>Thik&nbsp;ache,&nbsp;Ei&nbsp;ne&nbsp;Gift</p>
        </div>

        <div className="gift-popup" onClick={handleGiftClick}>
          <img src={`${BASE_URL}gift.png`} alt="gift-box" />
          <p>Click kor ekhane</p>
        </div>

        {showModal && (
          <div
            id="gift-modal"
            className="modal"
            style={{ display: "block" }}
            onClick={(e) => {
              if (e.target.id === "gift-modal") handleCloseModal();
            }}
          >
            <div className="modal-content">
              <span className="close-button" onClick={handleCloseModal}>
                &times;
              </span>
              <video
                src={`${BASE_URL}rol.mp4`}
                type="video/mp4"
                controls
                loop
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
              >
                browser unsupported
              </video>
              <div
                id="giftMessage"
                style={{ display: showGiftMessage ? "block" : "none" }}
              >
                <p>
                  Bhalo laglo gift?
                  <br />
                  😜
                </p>
              </div>
            </div>
            <div></div>
          </div>
        )}
      </main>

      <footer>
        <p>
          Made by <a href="https://github.com/soymadip">Soumadip</a> with ❤️ |
          <a
            href="https://github.com/soymadip/for-juniors"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </p>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
