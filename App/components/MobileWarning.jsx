import { useState, useEffect } from "react";
import "./MobileWarning.css";

const MobileWarning = () => {
    const [showMobileWarning, setShowMobileWarning] = useState(false);

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

    if (!showMobileWarning) return null;

    return (
        <div className="mobile-warning-modal">
            <div className="warning-content">
                <h2>Wait a minute! 🛑</h2>
                <p>This website is made for mobile devices.</p>
                <p>Please open it on your phone for the best experience!</p>
                <button onClick={() => window.location.reload()}>
                    Okay, I understand
                </button>
                <p
                    className="override-button"
                    onClick={() => setShowMobileWarning(false)}
                >
                    Continue anyway (I know what I'm doing)
                </p>
            </div>
        </div>
    );
};

export default MobileWarning;
