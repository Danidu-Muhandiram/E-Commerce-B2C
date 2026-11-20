import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag, HiMenuAlt3, HiX, HiOutlineUser, HiOutlineSearch } from "react-icons/hi";
import { useStore } from "../../context/store";
import SearchPanel from "./SearchPanel";

const TOPBAR_HEIGHT = 40;
const HIDE_AFTER = 160; // never hide while the hero's top is still in view
const SCROLL_DELTA = 8; // ignore tiny scroll movements so the bar doesn't flicker

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const closeSearch = useCallback(() => setIsSearchOpen(false), []);
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount, openCart, wishlist } = useStore();

    const toggleMenu = () => setIsMenuOpen((open) => !open);
    const closeMenu = () => setIsMenuOpen(false);

    // Hide on scroll down, show on scroll up. Read scroll position once per frame
    // and keep the last position in a local variable, so the listener is attached
    // once and the component only re-renders when the state actually flips.
    useEffect(() => {
        let lastY = window.scrollY;
        let frame = 0;

        const update = () => {
            frame = 0;
            const y = Math.max(window.scrollY, 0);
            setIsScrolled(y > TOPBAR_HEIGHT);

            if (y < HIDE_AFTER) {
                setIsHidden(false);
                lastY = y;
            } else if (Math.abs(y - lastY) >= SCROLL_DELTA) {
                setIsHidden(y > lastY);
                lastY = y;
            }
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    // Stop the page behind the mobile menu from scrolling.
    useEffect(() => {
        if (!isMenuOpen) return;
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = overflow;
        };
    }, [isMenuOpen]);

    const leftLinks = [
        { name: "Shop", path: "/shop" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Trending", path: "/trending" },
    ];

    const rightLinks = [
        { name: "Seasonal", path: "/seasonal" },
        { name: "Accessories", path: "/accessories" },
    ];

    return (
        <>
        {/* Fixed height in both states: only colour, shadow and position animate,
            so the page below never shifts while scrolling. */}
        <nav className={`sticky top-0 left-0 w-full z-40 h-16 md:h-20 flex items-center border-b transition-[translate,background-color,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-none ${
            isScrolled
                ? "bg-fashion-eggshell/90 backdrop-blur-md shadow-md border-fashion-moss/5"
                : "bg-fashion-eggshell shadow-sm border-fashion-moss/10"
        } ${isHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="flex w-full justify-between items-center relative container mx-auto px-4 md:px-8">

                {/* Left Navigation (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-start">
                    {leftLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="relative text-sm font-medium text-fashion-moss hover:text-fashion-black transition-colors duration-300 group py-1"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fashion-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </div>

                {/* Logo (Center) */}
                <div className="w-full lg:w-auto flex justify-start lg:justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50">
                    <Link to="/" className="text-3xl md:text-4xl font-playfair font-black tracking-tighter text-fashion-moss py-1">
                        Veloura
                    </Link>
                </div>

                {/* Right Navigation & Actions (Desktop) */}
                <div className="hidden lg:flex space-x-5 xl:space-x-7 items-center w-1/3 justify-end relative">
                    {rightLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="relative text-sm font-medium text-fashion-moss hover:text-fashion-black transition-colors duration-300 group py-1"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fashion-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}

                    {/* account icon on smaller laptops, login + sign up from xl */}
                    <Link
                        to="/login"
                        className="xl:hidden text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                        aria-label="Login"
                    >
                        <HiOutlineUser className="w-6 h-6" />
                    </Link>

                    {/* Login Link */}
                    <Link
                        to="/login"
                        className="hidden xl:inline relative text-sm font-medium text-fashion-moss hover:text-fashion-black transition-colors duration-300 group py-1"
                    >
                        Login
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fashion-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>

                    {/* Sign Up Button */}
                    <Link to="/signup" className="group relative shrink-0 hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium px-5 py-2 overflow-hidden transition-colors duration-300 border border-fashion-moss text-fashion-moss">
                        <div className="absolute inset-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 bg-fashion-moss" />
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-fashion-eggshell">Sign up</span>
                    </Link>

                    <button type="button" onClick={() => setIsSearchOpen(true)} className="text-fashion-moss hover:text-fashion-black transition-colors duration-300" aria-label="Search">
                        <HiOutlineSearch className="w-6 h-6" />
                    </button>

                    <Link to="/wishlist" className="relative text-fashion-moss hover:text-fashion-black transition-colors duration-300" aria-label={`Wishlist, ${wishlist.length} saved`}>
                        <FiHeart className="w-[22px] h-[22px]" />
                        {wishlist.length > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold tabular-nums bg-fashion-moss text-fashion-eggshell">
                                {wishlist.length > 9 ? "9+" : wishlist.length}
                            </span>
                        )}
                    </Link>

                    {/* Cart Icon */}
                    <button type="button" onClick={openCart} className="relative transition-colors duration-300 text-fashion-moss hover:text-fashion-black" aria-label={`Bag, ${cartCount} items`}>
                        <HiOutlineShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold tabular-nums bg-fashion-moss text-fashion-eggshell">
                                {cartCount > 9 ? "9+" : cartCount}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile Header Actions */}
                <div className="absolute right-4 md:right-8 flex items-center space-x-5 lg:hidden z-50">
                    <button type="button" onClick={() => setIsSearchOpen(true)} className="text-fashion-moss hover:text-fashion-black transition-colors duration-300" aria-label="Search">
                        <HiOutlineSearch className="w-6 h-6" />
                    </button>
                    {/* account lives in the menu on phones */}
                    <Link to="/wishlist" className="relative text-fashion-moss hover:text-fashion-black transition-colors duration-300" aria-label={`Wishlist, ${wishlist.length} saved`}>
                        <FiHeart className="w-[22px] h-[22px]" />
                        {wishlist.length > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold tabular-nums bg-fashion-moss text-fashion-eggshell">
                                {wishlist.length > 9 ? "9+" : wishlist.length}
                            </span>
                        )}
                    </Link>

                    <button type="button" onClick={openCart} className="relative text-fashion-moss hover:text-fashion-black transition-colors duration-300" aria-label={`Bag, ${cartCount} items`}>
                        <HiOutlineShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold tabular-nums bg-fashion-moss text-fashion-eggshell">
                                {cartCount > 9 ? "9+" : cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        className="text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                    </button>
                </div>
            </div>

        </nav>

        <SearchPanel open={isSearchOpen} onClose={closeSearch} />

        {/* Mobile menu: outside <nav> so the nav's slide transform doesn't move it */}
            <div
                inert={!isMenuOpen}
                className={`fixed inset-0 z-30 overflow-y-auto overscroll-contain bg-fashion-eggshell transition-transform duration-500 ease-in-out motion-reduce:transition-none ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden`}
            >
            {/* top padding clears the topbar + navbar, scrolls on short screens */}
            <div className="min-h-full flex flex-col items-center justify-center gap-6 pt-[120px] pb-10">
                {[...leftLinks, ...rightLinks].map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className="text-2xl font-playfair text-fashion-black hover:text-fashion-moss transition-colors"
                        onClick={closeMenu}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    to="/wishlist"
                    className="text-2xl font-playfair text-fashion-black hover:text-fashion-moss transition-colors"
                    onClick={closeMenu}
                >
                    Wishlist
                </Link>

                {/* Mobile Auth Actions */}
                <div className="flex flex-col items-center space-y-4 pt-4 w-[250px]">
                    <Link
                        to="/login"
                        className="w-full text-center text-sm font-medium py-3 text-fashion-moss border border-fashion-moss/30 hover:border-fashion-moss transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="w-full text-center text-sm font-medium py-3 bg-fashion-moss text-fashion-eggshell hover:bg-fashion-moss/90 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        Sign up
                    </Link>
                </div>
            </div>
            </div>
        </>
    );
};

export default NavBar;
