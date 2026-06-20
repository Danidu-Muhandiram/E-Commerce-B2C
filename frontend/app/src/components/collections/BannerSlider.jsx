import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

const banners = [
    { id: 1, image: banner1, alt: 'Banner 1' },
    { id: 2, image: banner2, alt: 'Banner 2' },
    { id: 3, image: banner3, alt: 'Banner 3' },
    { id: 4, image: banner4, alt: 'Banner 4' },
    // Duplicate set for seamless infinite scrolling
    { id: 5, image: banner1, alt: 'Banner 1' },
    { id: 6, image: banner2, alt: 'Banner 2' },
    { id: 7, image: banner3, alt: 'Banner 3' },
    { id: 8, image: banner4, alt: 'Banner 4' },
];

const BannerSlider = () => {
    return (
        <section className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden bg-fashion-black">
            {/* Infinite Scroll Container */}
            <div className="absolute inset-0 flex w-max animate-scroll">
                {banners.map((banner) => (
                    <div key={banner.id} className="relative h-full w-[100vw] flex-shrink-0">
                        {/* Overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-fashion-black/30 z-10" />
                        <img
                            src={banner.image}
                            alt={banner.alt}
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            {/* Bottom Overlay Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 md:pb-20 pointer-events-none">
                <div className="pointer-events-auto text-center px-6">
                    <Link
                        to="/shop"
                        className="group relative inline-flex items-center justify-center bg-fashion-black/40 backdrop-blur-sm text-fashion-eggshell px-10 py-4 font-poppins font-medium text-[11px] uppercase tracking-[0.3em] transition-all duration-500 border border-fashion-eggshell/50 hover:border-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-black shadow-xl"
                    >
                        <span className="relative z-10 flex items-center gap-4 transition-colors duration-500">
                            Discover the Edit
                            <FaArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-all duration-300" />
                        </span>
                    </Link>
                </div>
            </div>

        </section >
    );
};

export default BannerSlider;
