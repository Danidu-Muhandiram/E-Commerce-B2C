import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle Scroll for Background Change
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <nav
            className={`fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out top-10 w-full ${isScrolled
                ? "bg-fashion-eggshell shadow-md py-3 px-8"
                : "bg-transparent py-4 px-6"
                }`}
        >
            <div className={`flex justify-between items-center relative container mx-auto transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : ""}`}>

                {/* Left Navigation (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-start">
                    {leftLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`text-xs font-poppins font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-fashion-moss hover:text-fashion-black" : "text-fashion-eggshell hover:text-white"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo (Center) */}
                <div className="w-full lg:w-1/3 flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50">
                    <div className={`relative flex items-center justify-center transition-all duration-500 ease-in-out ${isScrolled ? "scale-95 translate-y-0" : "-mt-6 scale-100 translate-y-0"}`}> {/* Negative margin to pull up to TopBar */}

                        {/* SVG Background Tab */}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 -top-1 
                                    w-[420px] h-[75px] 
                                    transition-all duration-500 ease-in-out
                                    pointer-events-none origin-top
                                    ${isScrolled ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
                        >
                            <svg
                                viewBox="0 0 420 75"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <path
                                    fill="#F0EAD6"
                                    d="
                                M0 0
                                Q130 0 130 50
                                V55
                                Q130 75 150 75
                                H270
                                Q290 75 290 55
                                V50
                                Q290 0 420 0
                                Z
                            "
                                />
                            </svg>
                        </div>


                        <Link to="/" className={`relative z-10 text-4xl font-playfair font-black tracking-tighter transition-all duration-500 px-10 text-fashion-moss ${isScrolled ? "py-2" : "py-6"
                            }`}>
                            Veloura
                        </Link>
                    </div>
                </div>

                {/* Right Navigation & Actions (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-end">
                    {rightLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`text-xs font-poppins font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-fashion-moss hover:text-fashion-black" : "text-fashion-eggshell hover:text-white"}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Sign Up Button */}
                    <Link to="/signup" className={`group relative inline-flex items-center justify-center text-xs font-poppins font-bold uppercase tracking-widest px-6 py-2 overflow-hidden transition-colors duration-300 border ${isScrolled ? "border-fashion-moss text-fashion-moss" : "border-fashion-eggshell text-fashion-eggshell"}`}>
                        <div className={`absolute inset-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 ${isScrolled ? "bg-fashion-moss" : "bg-fashion-eggshell"}`} />
                        <span className={`relative z-10 transition-colors duration-500 ${isScrolled ? "group-hover:text-fashion-eggshell" : "group-hover:text-fashion-moss"}`}>Sign Up</span>
                    </Link>

                    {/* Cart Icon */}
                    <button className={`relative transition-colors duration-300 ${isScrolled ? "text-fashion-moss hover:text-fashion-black" : "text-fashion-eggshell hover:text-white"}`}>
                        <HiOutlineShoppingBag className="w-6 h-6" />
                        <span className={`absolute -top-1 -right-1 text-[9px] w-3 h-3 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${isScrolled ? "bg-fashion-moss text-fashion-eggshell" : "bg-fashion-eggshell text-fashion-moss"}`}>
                            3
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden z-50 absolute right-0 transition-colors duration-300 ${isScrolled ? "text-fashion-moss hover:text-fashion-black" : "text-fashion-eggshell"}`}
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 right-0 h-screen w-full bg-white z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
            </div>
        </nav>
    );
};

export default NavBar;
