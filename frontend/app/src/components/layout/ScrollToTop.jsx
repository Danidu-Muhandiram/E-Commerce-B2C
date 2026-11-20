import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top on page change, but not when only the query string changes
// (e.g. toggling a filter on the shop page).
// links like /seasonal#look-02 scroll to that section instead
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        const target = hash && document.getElementById(hash.slice(1));
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
    }, [pathname, hash]);
    return null;
};

export default ScrollToTop;
