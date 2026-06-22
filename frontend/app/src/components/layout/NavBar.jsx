import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiMenuAlt3, HiX, HiOutlineUser } from "react-icons/hi";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle Smart Scroll (Hide on down, show on up) and Scrolled state
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if user scrolled past Topbar height (40px)
            if (currentScrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Always show navbar near the top of the page
            if (currentScrollY <= 50) {
                setIsVisible(true);
            } 
            // Hide on scroll down, show on scroll up
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

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
        <nav className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
            isScrolled 
                ? "bg-fashion-eggshell/85 backdrop-blur-md py-3 shadow-md border-b border-fashion-moss/5" 
                : "bg-fashion-eggshell py-5 shadow-sm border-b border-fashion-moss/10"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="flex justify-between items-center relative container mx-auto px-8">

                {/* Left Navigation (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-start">
                    {leftLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="relative text-[11px] font-poppins font-bold uppercase tracking-[0.2em] text-fashion-moss hover:text-fashion-black transition-colors duration-300 group py-1"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fashion-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </div>

                {/* Logo (Center) */}
                <div className="w-full lg:w-1/3 flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50">
                    <Link to="/" className="text-3xl md:text-4xl font-playfair font-black tracking-tighter text-fashion-moss py-1">
                        Veloura
                    </Link>
                </div>

                {/* Right Navigation & Actions (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-end relative">
                    {rightLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="relative text-[11px] font-poppins font-bold uppercase tracking-[0.2em] text-fashion-moss hover:text-fashion-black transition-colors duration-300 group py-1"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fashion-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}

                    {/* Login Link */}
                    <Link
                        to="/login"
                        className="relative text-[10px] font-poppins font-bold uppercase tracking-[0.2em] text-fashion-moss hover:text-fashion-black transition-colors duration-300 group py-1"
                    >
                        Login
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fashion-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>

                    {/* Sign Up Button */}
                    <Link to="/signup" className="group relative inline-flex items-center justify-center text-[10px] font-poppins font-bold uppercase tracking-[0.2em] px-6 py-2 overflow-hidden transition-colors duration-300 border border-fashion-moss text-fashion-moss">
                        <div className="absolute inset-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 bg-fashion-moss" />
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-fashion-eggshell">Sign Up</span>
                    </Link>

                    {/* Cart Icon */}
                    <button className="relative transition-colors duration-300 text-fashion-moss hover:text-fashion-black">
                        <HiOutlineShoppingBag className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 text-[9px] w-3 h-3 rounded-full flex items-center justify-center font-bold bg-fashion-moss text-fashion-eggshell">
                            3
                        </span>
                    </button>
                </div>

                {/* Mobile Header Actions */}
                <div className="absolute right-8 flex items-center space-x-5 lg:hidden z-50">
                    <Link
                        to="/login"
                        className="text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                        aria-label="Login"
                    >
                        <HiOutlineUser className="w-6 h-6" />
                    </Link>

                    <button className="relative text-fashion-moss hover:text-fashion-black transition-colors duration-300" aria-label="Cart">
                        <HiOutlineShoppingBag className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 text-[9px] w-3 h-3 rounded-full flex items-center justify-center font-bold bg-fashion-moss text-fashion-eggshell">
                            3
                        </span>
                    </button>

                    <button
                        className="text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 right-0 h-screen w-full bg-fashion-eggshell z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden flex flex-col items-center justify-center space-y-8`}
            >
                {[...leftLinks, ...rightLinks].map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className="text-2xl font-playfair font-bold text-fashion-black hover:text-fashion-moss transition-colors"
                        onClick={toggleMenu}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile Auth Actions */}
                <div className="flex flex-col items-center space-y-4 pt-6 w-[250px]">
                    <Link
                        to="/login"
                        className="w-full text-center text-[11px] font-poppins font-bold uppercase tracking-[0.2em] py-3 text-fashion-moss border border-fashion-moss/30 hover:border-fashion-moss transition-colors duration-300"
                        onClick={toggleMenu}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="w-full text-center text-[11px] font-poppins font-bold uppercase tracking-[0.2em] py-3 bg-fashion-moss text-fashion-eggshell hover:bg-fashion-moss/90 transition-colors duration-300"
                        onClick={toggleMenu}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
