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
        title: 'Daisy street printed maxi dress',
        price: 'Rs 4,490.00',
        installments: 'or 3 X Rs 1,496.66 with KOKO',
        image: new1,
        isNew: true
    },
    {
        id: 2,
        title: 'Blue tie-dye maxi dress',
        price: 'Rs 5,290.00',
        installments: 'or 3 X Rs 1,763.33 with KOKO',
        image: new2,
        isNew: true
    },
    {
        id: 3,
        title: 'Satin finish occasion dress',
        price: 'Rs 6,490.00',
        installments: 'or 3 X Rs 2,163.33 with KOKO',
        image: new3,
        isNew: true
    },
    {
        id: 4,
        title: 'Zebra print wrap dress',
        price: 'Rs 4,990.00',
        installments: 'or 3 X Rs 1,663.33 with KOKO',
        image: new5,
        isNew: true
    },
];

const NewArrivals = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340; // Approx card width + gap
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    return (
        <section className="bg-white pt-20 pb-10 px-6 md:px-16 w-full relative z-10">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                        {/* Fine Line & Mini Heading */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-fashion-moss/60" />
                            <span className="text-fashion-moss text-sm font-medium">
                                Current favourites
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-playfair text-fashion-black leading-[1.1] tracking-tight">
                            Trending
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/shop"
                            className="group hidden md:flex items-center gap-3 text-fashion-moss hover:text-fashion-black transition-colors duration-300 text-sm font-medium pb-2 border-b border-fashion-moss/30 hover:border-fashion-black"
                        >
                            View all
                            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        {/* Custom Slider Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-[4px] border border-fashion-moss/20 flex items-center justify-center text-fashion-moss hover:bg-fashion-moss hover:text-white transition-all duration-300"
                            >
                                <FaArrowLeft className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-[4px] border border-fashion-moss/20 flex items-center justify-center text-fashion-moss hover:bg-fashion-moss hover:text-white transition-all duration-300"
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
                                    {product.isNew && (
                                        <span className="absolute top-0 left-0 bg-fashion-terracotta text-fashion-eggshell px-2 py-0.5 text-[11px] z-10 font-medium">
                                            New
                                        </span>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-fashion-black text-sm line-clamp-1 w-full">
                                        {product.title}
                                    </h3>
                                    <p className="text-fashion-black text-sm tabular-nums">
                                        {product.price}
                                    </p>
                                    <p className="text-fashion-black/60 text-xs">
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

export default NewArrivals;
