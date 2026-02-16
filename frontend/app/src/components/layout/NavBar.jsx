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
            className={`fixed top-12 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center relative">

                {/* Left Navigation (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-start">
                    {leftLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-xs font-poppins font-semibold uppercase tracking-widest text-gray-800 hover:text-fashion-red transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo (Center) */}
                <div className="w-full lg:w-1/3 flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <Link to="/" className="text-3xl font-playfair font-black tracking-tighter text-fashion-black">
                        Veloura<span className="text-fashion-red">.</span>
                    </Link>
                </div>

                {/* Right Navigation & Actions (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-end">
                    {rightLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-xs font-poppins font-semibold uppercase tracking-widest text-gray-800 hover:text-fashion-red transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Sign Up Button */}
                    <Link to="/signup" className="text-xs font-poppins font-bold uppercase tracking-widest bg-fashion-black text-white px-5 py-2 rounded-full hover:bg-fashion-red transition-colors">
                        Sign Up
                    </Link>

                    {/* Cart Icon */}
                    <button className="relative text-fashion-black hover:text-fashion-red transition-colors">
                        <HiOutlineShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-fashion-red text-white text-[9px] w-3 h-3 rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-fashion-black z-50 absolute right-6"
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
