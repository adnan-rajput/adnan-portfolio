import { useEffect } from "react";
import { useLocation } from "react-router-dom";
useLocation
useEffect
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
}
export default ScrollToTop;

