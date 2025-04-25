import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // window.scrollTo(0, 0); // Scroll to top-left
    }, [pathname]);

    return null;
};

export default ScrollToTop;
