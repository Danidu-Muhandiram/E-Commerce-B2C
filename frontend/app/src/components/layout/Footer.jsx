import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaInstagram as IgIcon, FaTiktok as TtIcon, FaFacebookF as FbIcon, FaPinterestP as PinIcon, FaYoutube as YtIcon } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-fashion-eggshell w-full mt-auto relative z-10 border-t border-fashion-moss/20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10 md:py-12">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">

                    {/* Left Side: Content */}
                    <div className="flex flex-wrap md:flex-row gap-10 md:gap-16 lg:gap-24">
                        {/* Newsletter */}
                        <div className="max-w-sm">
                            <h4 className="font-playfair text-xl md:text-2xl text-fashion-black mb-4">
                                Stay a step ahead.
                            </h4>
                            <p className="font-inter text-xs text-fashion-black/70 mb-4">
                                Sign up for our newsletter to receive updates on exclusive collections, pre-sales, and private events.
                            </p>
                            <form className="flex w-full border-b border-fashion-black/30 pb-2 group focus-within:border-fashion-black transition-colors">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent outline-none font-inter text-xs text-fashion-black placeholder:text-fashion-black/40"
                                    required
                                />
                                <button type="submit" className="text-fashion-black hover:text-fashion-moss transition-colors px-2">
                                    <FiArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Shop Links */}
                        <div>
                            <h4 className="text-xs font-medium tracking-wider text-fashion-black/50 uppercase mb-4">
                                Shop
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link to="/women" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Women</Link></li>
                                <li><Link to="/men" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Men</Link></li>
                                <li><Link to="/shop?gender=kids" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Kids</Link></li>
                                <li><Link to="/accessories" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Accessories</Link></li>
                            </ul>
                        </div>

                        {/* Support Links, no pages for these yet so they go home */}
                        <div>
                            <h4 className="text-xs font-medium tracking-wider text-fashion-black/50 uppercase mb-4">
                                Assistance
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link to="/" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Customer care</Link></li>
                                <li><Link to="/" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Shipping and returns</Link></li>
                                <li><Link to="/" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Size guide</Link></li>
                                <li><Link to="/" className="font-inter text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Social Media */}
                    <div className="flex flex-col lg:items-end">
                        <h4 className="text-xs font-medium tracking-wider text-fashion-black/50 uppercase mb-4">
                            Join our community
                        </h4>
                        <div className="flex gap-5">
                            <Link to="/" aria-label="Instagram" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <IgIcon className="w-7 h-7" />
                            </Link>
                            <Link to="/" aria-label="TikTok" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <TtIcon className="w-7 h-7" />
                            </Link>
                            <Link to="/" aria-label="Facebook" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <FbIcon className="w-6 h-6" />
                            </Link>
                            <Link to="/" aria-label="Pinterest" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <PinIcon className="w-7 h-7" />
                            </Link>
                            <Link to="/" aria-label="YouTube" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <YtIcon className="w-7 h-7" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Logo & Copyright */}
            <div className="border-t border-fashion-moss/20 py-4">
                <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="text-xl md:text-2xl font-playfair font-black text-fashion-moss tracking-tighter">
                        Veloura.
                    </Link>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-inter text-[10px] text-fashion-black/60">
                        <p>&copy; {new Date().getFullYear()} Veloura. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link to="/" className="hover:text-fashion-black transition-colors">Privacy Policy</Link>
                            <Link to="/" className="hover:text-fashion-black transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
