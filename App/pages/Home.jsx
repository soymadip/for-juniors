import { useState, useEffect, useRef } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const Home = () => {
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
            document.documentElement.classList.add("no-scroll");
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        } else {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
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
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={`${BASE_URL}cts.png`} width="45px" alt="CTS Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                    <div style={{ marginTop: '5px', display: 'flex', gap: '5px' }}>
                        <img src={`${BASE_URL}dcst.png`} width="33px" alt="DCST Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                        <img src={`${BASE_URL}c.png`} width="32px" alt="C Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                        <img src={`${BASE_URL}js.png`} width="30px" alt="JS Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                        <img src={`${BASE_URL}12.png`} width="31px" alt="12 Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                    </div>
                </div>
            </header>

            <main>
                <div className="more">
                    <div className="content-wrapper">
                        <h1 className="hero-text">Aro gift lagbe?</h1>
                        <img src={`${BASE_URL}character.png`} width="250px" style={{ filter: 'drop-shadow(4px 4px 0px #000) drop-shadow(0 0 0.5px rgba(255,255,255,0.5))' }} />

                        <div
                            className="scroll-indicator"
                            role="button"
                            onClick={handleScrollClick}
                        >
                            <p>Then Tap here</p>
                        </div>
                    </div>
                </div>

                <div id="memes-section" ref={memesSectionRef}>
                    <h1>Memes You can relate</h1>
                    <p>( laugh now, you will relate later 😁 )</p>
                </div>

                <div className="gallery">
                    <img src={`${BASE_URL}meme/meme.jpeg`} alt="Meme 1" />
                    <img src={`${BASE_URL}meme/2.jpg`} alt="Meme 2" />
                    <img src={`${BASE_URL}meme/3.jpg`} alt="Meme 3" />
                    <img src={`${BASE_URL}meme/4.jpg`} alt="Meme 4" />
                    <img src={`${BASE_URL}meme/5.jpg`} alt="Meme 5" />
                </div>

                <div className="more-videos">
                    <p>Ekhono gift chai?</p>
                </div>

                <div className="more-videos2">
                    <p>Ekhono Scroll korchis?</p>
                </div>

                <div className="more-videos3">
                    <p>Thik ache, Ei ne Gift</p>
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
                                <p style={{ color: 'var(--color-pink)', fontSize: '2rem' }}>
                                    Bhalo laglo gift?
                                    <br />
                                    😜
                                </p>
                            </div>
                        </div>
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
                        style={{ marginLeft: '10px' }}
                    >
                        Source Code
                    </a>
                </p>
            </footer>
        </>
    );
};

export default Home;
