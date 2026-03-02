import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
        <nav className="fixed left-0 top-10 w-full z-40 bg-fashion-eggshell shadow-sm py-3 px-8 border-b border-fashion-moss/10 transition-none">
            <div className="flex justify-between items-center relative container mx-auto">

                {/* Left Navigation (Desktop) */}
                <div className="hidden lg:flex space-x-8 items-center w-1/3 justify-start">
                    {leftLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-[11px] font-poppins font-bold uppercase tracking-[0.2em] text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                        >
                            {link.name}
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
                            className="text-[11px] font-poppins font-bold uppercase tracking-[0.2em] text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}

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

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 absolute right-0 text-fashion-moss hover:text-fashion-black transition-colors duration-300"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                </button>
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
            </div>
        </nav>
    );
};

export default NavBar;
