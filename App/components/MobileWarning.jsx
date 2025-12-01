import { useState, useEffect } from "react";
import "./MobileWarning.css";

const MobileWarning = () => {
    const [showMobileWarning, setShowMobileWarning] = useState(false);
    const [showBrokenLayoutWarning, setShowBrokenLayoutWarning] = useState(false);
    const [countdown, setCountdown] = useState(4);

    useEffect(() => {
        let timeoutId;
        const checkScreenSize = () => {
            if (window.innerWidth > 768) {
                if (!timeoutId) {
                    timeoutId = setTimeout(() => {
                        setShowMobileWarning(true);
                    }, 1000);
                }
            } else {
                clearTimeout(timeoutId);
                timeoutId = null;
                setShowMobileWarning(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        let timer;
        if (showBrokenLayoutWarning && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (showBrokenLayoutWarning && countdown === 0) {
            setShowMobileWarning(false);
            setShowBrokenLayoutWarning(false);
        }
        return () => clearTimeout(timer);
    }, [showBrokenLayoutWarning, countdown]);

    const handleContinue = () => {
        setShowBrokenLayoutWarning(true);
        setCountdown(4);
    };

    if (!showMobileWarning) return null;

    return (
        <div className="mobile-warning-modal">
            <div className="warning-content">
                {!showBrokenLayoutWarning ? (
                    <>
                        <h2>Wait a minute! </h2>
                        <p><b>This website is made for mobile devices.</b></p>
                        <p>Please <b>open it on your phone</b> for the best experience!</p>
                        <button onClick={() => window.location.href = 'https://soymadip.github.io'}>
                            Okay, I understand
                        </button>
                        <p
                            className="override-button"
                            onClick={handleContinue}
                        >
                            Continue anyway (I know what I'm doing)
                        </p>
                    </>
                ) : (
                    <>
                        <h2>⚠️ Warning ⚠️</h2>
                        <p><b>Styling and elements might be broken on this screen size.</b></p>
                        <p>Proceeding in {countdown} seconds...</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default MobileWarning;
