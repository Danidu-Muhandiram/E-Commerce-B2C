import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useRef } from 'react';

import new1 from '../../assets/new1.webp';
import new2 from '../../assets/new2.webp';
import new3 from '../../assets/new3.webp';
import new5 from '../../assets/new5.webp';

const products = [
    {
        id: 1,
        title: 'DAISY STREET PRINTED MAXI DRESS',
        price: 'Rs 3,490.00',
        originalPrice: 'Rs 4,490.00',
        installments: 'or 3 X Rs 1,163.33 with KOKO',
        image: new1,
        isSale: true
    },
    {
        id: 2,
        title: 'BLUE TIE DYE MAXI DRESS',
        price: 'Rs 3,990.00',
        originalPrice: 'Rs 5,290.00',
        installments: 'or 3 X Rs 1,330.00 with KOKO',
        image: new2,
        isSale: true
    },
    {
        id: 3,
        title: 'SATIN FINISH OCCASION DRESS',
        price: 'Rs 4,990.00',
        originalPrice: 'Rs 6,490.00',
        installments: 'or 3 X Rs 1,663.33 with KOKO',
        image: new3,
        isSale: true
    },
    {
        id: 4,
        title: 'ZEBRA PRINT WRAP DRESS',
        price: 'Rs 3,290.00',
        originalPrice: 'Rs 4,990.00',
        installments: 'or 3 X Rs 1,096.66 with KOKO',
        image: new5,
        isSale: true
    }
];

const SpecialOffers = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340; // Approx card width + gap
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-white pt-10 pb-20 px-6 md:px-16 w-full relative z-10">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                        {/* Fine Line & Mini Heading */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-red-600/60" />
                            <span className="text-red-700 font-poppins text-[10px] tracking-[0.3em] uppercase font-semibold">
                                Limited Time
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-black leading-[1.1] tracking-tight">
                            Special Offers.
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/shop"
                            className="group hidden md:flex items-center gap-3 text-fashion-black hover:text-red-700 transition-colors duration-300 font-poppins text-[11px] font-bold uppercase tracking-[0.2em] pb-2 border-b border-fashion-black/30 hover:border-red-700"
                        >
                            View All Sale
                            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        {/* Custom Slider Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-[4px] border border-fashion-black/20 flex items-center justify-center text-fashion-black hover:bg-fashion-black hover:text-white transition-all duration-300"
                            >
                                <FaArrowLeft className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-[4px] border border-fashion-black/20 flex items-center justify-center text-fashion-black hover:bg-fashion-black hover:text-white transition-all duration-300"
                            >
                                <FaArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Interactive Slider Container */}
                <div className="w-full relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {products.map((product) => (
                            <div key={product.id} className="snap-start flex flex-col w-[280px] md:w-[320px] flex-shrink-0 group cursor-pointer">
                                {/* Image Container */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-5">
                                    {product.isSale && (
                                        <span className="absolute top-0 left-0 bg-red-600 text-fashion-eggshell px-4 py-1.5 text-[10px] sm:text-xs font-poppins tracking-wider z-10 font-bold uppercase">
                                            SALE
                                        </span>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col items-center text-center px-2">
                                    <h3 className="text-fashion-black font-poppins text-xs font-medium tracking-[0.08em] mb-2 uppercase line-clamp-1 w-full">
                                        {product.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-1">
                                        <p className="text-gray-400 font-poppins text-xs line-through">
                                            {product.originalPrice}
                                        </p>
                                        <p className="text-red-600 font-poppins font-bold text-sm">
                                            {product.price}
                                        </p>
                                    </div>

                                    <p className="text-fashion-black/60 font-poppins text-[10px] sm:text-xs tracking-wide">
                                        {product.installments}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
