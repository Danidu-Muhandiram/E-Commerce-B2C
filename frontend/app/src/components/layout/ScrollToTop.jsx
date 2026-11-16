import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top on page change, but not when only the query string changes
// (e.g. toggling a filter on the shop page).
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default ScrollToTop;
