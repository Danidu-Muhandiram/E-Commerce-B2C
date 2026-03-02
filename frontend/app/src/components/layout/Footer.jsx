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
                            <h4 className="font-playfair text-xl md:text-2xl font-bold text-fashion-black mb-4">
                                Stay a step ahead.
                            </h4>
                            <p className="font-poppins text-xs text-fashion-black/70 mb-4">
                                Sign up for our newsletter to receive updates on exclusive collections, pre-sales, and private events.
                            </p>
                            <form className="flex w-full border-b border-fashion-black/30 pb-2 group focus-within:border-fashion-black transition-colors">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent outline-none font-poppins text-xs text-fashion-black placeholder:text-fashion-black/40"
                                    required
                                />
                                <button type="submit" className="text-fashion-black hover:text-fashion-moss transition-colors px-2">
                                    <FiArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Shop Links */}
                        <div>
                            <h4 className="font-poppins text-[10px] tracking-[0.2em] font-semibold text-fashion-black uppercase mb-4">
                                Shop
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Women's Collection</Link></li>
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Men's Collection</Link></li>
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Kids' Collection</Link></li>
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Accessories</Link></li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h4 className="font-poppins text-[10px] tracking-[0.2em] font-semibold text-fashion-black uppercase mb-4">
                                Assistance
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Customer Care</Link></li>
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Shipping & Returns</Link></li>
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Size Guide</Link></li>
                                <li><Link to="#" className="font-poppins text-xs text-fashion-black/70 hover:text-fashion-black transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Social Media */}
                    <div className="flex flex-col lg:items-end">
                        <h4 className="font-poppins text-[10px] tracking-[0.2em] font-semibold text-fashion-black uppercase mb-4">
                            Join Our Community
                        </h4>
                        <div className="flex gap-5">
                            <a href="#" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <IgIcon className="w-7 h-7" />
                            </a>
                            <a href="#" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <TtIcon className="w-7 h-7" />
                            </a>
                            <a href="#" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <FbIcon className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <PinIcon className="w-7 h-7" />
                            </a>
                            <a href="#" className="text-fashion-black hover:text-fashion-moss transition-colors duration-300">
                                <YtIcon className="w-7 h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Logo & Copyright */}
            <div className="border-t border-fashion-moss/20 py-4">
                <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="text-xl md:text-2xl font-playfair font-bold text-fashion-black italic tracking-tighter">
                        Veloura.
                    </Link>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-poppins text-[10px] text-fashion-black/60">
                        <p>&copy; {new Date().getFullYear()} Veloura. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link to="#" className="hover:text-fashion-black transition-colors">Privacy Policy</Link>
                            <Link to="#" className="hover:text-fashion-black transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
