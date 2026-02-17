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
            className={`fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-in-out ${isScrolled
                ? "top-4 w-[90%] md:w-[80%] bg-white/80 backdrop-blur-md shadow-lg rounded-full py-3 px-8"
                : "top-10 w-full bg-transparent py-4 px-6"
                }`}
        >
            <div className={`flex justify-between items-center relative ${!isScrolled && "container mx-auto"}`}>

                {/* Left Navigation (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-start">
                    {leftLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`text-xs font-poppins font-bold uppercase tracking-widest transition-colors ${isScrolled ? "text-fashion-black hover:text-fashion-red" : "text-fashion-black hover:text-white"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo (Center) */}
                {/* Logo (Center) */}
                <div className="w-full lg:w-1/3 flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50">
                    <div className="relative flex items-center justify-center -mt-6"> {/* Negative margin to pull up to TopBar */}

                        {/* SVG Background Tab */}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 top-0 
            w-[460px] h-[90px] 
            transition-opacity duration-500 
            pointer-events-none
            ${isScrolled ? "opacity-0" : "opacity-100"}`}
                        >
                            <svg
                                viewBox="0 0 460 75"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <path
                                    fill="#1a1a1a"
                                    d="
            M 0,0 
            C 80,0 120,2 160,15 
            C 185,25 200,45 230,45 
            H 230 
            C 260,45 275,25 300,15 
            C 340,2 380,0 460,0 
            Z
        "
                                />
                            </svg>
                        </div>


                        <Link to="/" className={`relative z-10 text-3xl font-playfair font-black tracking-tighter transition-colors duration-300 py-6 px-10 ${isScrolled ? "text-fashion-black" : "text-white"
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
                            className={`text-xs font-poppins font-bold uppercase tracking-widest transition-colors ${isScrolled ? "text-fashion-black hover:text-fashion-red" : "text-fashion-black hover:text-white"}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Sign Up Button */}
                    <Link to="/signup" className="text-xs font-poppins font-bold uppercase tracking-widest bg-fashion-black text-white px-6 py-2 rounded-full hover:bg-fashion-red transition-colors shadow-md">
                        Sign Up
                    </Link>

                    {/* Cart Icon */}
                    <button className={`relative transition-colors ${isScrolled ? "text-fashion-black hover:text-fashion-red" : "text-fashion-black hover:text-white"}`}>
                        <HiOutlineShoppingBag className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 bg-fashion-red text-white text-[9px] w-3 h-3 rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-fashion-black z-50 absolute right-0"
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
                        className="text-2xl font-playfair font-bold text-fashion-black hover:text-fashion-red transition-colors"
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
