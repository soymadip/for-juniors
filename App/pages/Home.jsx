import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BASE_URL = import.meta.env.BASE_URL;

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [showGiftMessage, setShowGiftMessage] = useState(false);
    const videoRef = useRef(null);
    const memesSectionRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const memeSettings = {
        ...settings,
        autoplaySpeed: 5000
    };

    const handleScrollClick = () => {
        const headerHeight = document.querySelector("header").offsetHeight + 60; // Add extra offset to ensure no overlap
        const memesSectionTop = memesSectionRef.current.offsetTop; // Get the top position of the memes section
        window.scrollTo({
            top: memesSectionTop - headerHeight, // Scroll to the memes section with an adjusted offset
            behavior: "smooth",
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
                        <img src={`${BASE_URL}dcst.png`} width="22px" alt="DCST Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                        <img src={`${BASE_URL}c.png`} width="22px" alt="C Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                        <img src={`${BASE_URL}js.png`} width="22px" alt="JS Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                        <img src={`${BASE_URL}12.png`} width="22px" alt="12 Logo" style={{ filter: 'drop-shadow(2px 2px 0px #000)' }} />
                    </div>
                </div>
            </header>

            <main>
                <div className="more">
                    <div className="content-wrapper">
                        <h1 className="hero-text">
                            <b>Hello Juniors</b>
                            <p className="welcomeText">
                                Welcome to abroad
                            </p >
                        </h1>
                        <img src={`${BASE_URL}character.png`} width="210px" style={{ filter: 'drop-shadow(4px 4px 0px #000) drop-shadow(0 0 0.5px rgba(255,255,255,0.5))' }} />

                        <div
                            className="scroll-indicator"
                            role="button"
                            onClick={handleScrollClick}
                        >
                            <p>Tap here</p>
                        </div>
                    </div>
                </div>

                <div className="meme-wrapper">
                    <div id="memes-section" ref={memesSectionRef}>
                        <h1>Some Memes for You</h1>
                        <p>( laugh now, you will relate later 😁 )</p>
                    </div>

                    <div className="carousel-container">
                        <Slider {...memeSettings}>
                            <div className="carousel-slide">
                                <img src={`${BASE_URL}meme/1.png`} alt="Meme 1" />
                            </div>
                            <div className="carousel-slide">
                                <img src={`${BASE_URL}meme/2.png`} alt="Meme 2" />
                            </div>
                            <div className="carousel-slide">
                                <img src={`${BASE_URL}meme/3.png`} alt="Meme 3" />
                            </div>
                            <div className="carousel-slide">
                                <img src={`${BASE_URL}meme/4.png`} alt="Meme 4" />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div id="gallery-section">
                    <h1>Some Pictures of CTS</h1>
                </div>

                <div className="carousel-container">
                    <Slider {...settings}>
                        <div className="carousel-slide">
                            <img src={`${BASE_URL}gallery/1.jpeg`} alt="Gallery 1" />
                        </div>
                        <div className="carousel-slide">
                            <img src={`${BASE_URL}gallery/2.jpeg`} alt="Gallery 2" />
                        </div>
                        <div className="carousel-slide">
                            <img src={`${BASE_URL}gallery/3.jpeg`} alt="Gallery 3" />
                        </div>
                        <div className="carousel-slide">
                            <img src={`${BASE_URL}gallery/4.jpeg`} alt="Gallery 4" />
                        </div>
                        <div className="carousel-slide">
                            <img src={`${BASE_URL}gallery/5.jpeg`} alt="Gallery 5" />
                        </div>
                        <div className="carousel-slide">
                            <img src={`${BASE_URL}gallery/6.jpeg`} alt="Gallery 6" />
                        </div>
                    </Slider>
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
                    Made with ❤️ by <a href="https://soymadip.github.io">Soumadip</a>
                </p>
            </footer>
        </>
    );
};

export default Home;
