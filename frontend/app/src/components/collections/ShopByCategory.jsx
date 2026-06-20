import React from 'react';
import { Link } from 'react-router-dom';

import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

const categories = [
    { id: 1, title: 'WOMENS', image: banner1 },
    { id: 2, title: 'MENS', image: banner2 },
    { id: 3, title: 'KIDS', image: banner3 },
    { id: 4, title: 'HOME & LIFESTYLE', image: banner4 },
    { id: 5, title: 'BAGS', image: banner2 },
    { id: 6, title: 'SHOES', image: banner3 },
    { id: 7, title: 'KIDS TOYS', image: banner4 },
    { id: 8, title: 'BABY CARE', image: banner1 },
];

const ShopByCategory = () => {
    return (
        <section className="bg-white pt-10 pb-20 px-6 md:px-16 w-full relative z-10">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                        {/* Fine Line & Mini Heading */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-fashion-moss/60" />
                            <span className="text-fashion-moss font-poppins text-[10px] tracking-[0.3em] uppercase font-semibold">
                                Explore
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-black leading-[1.1] tracking-tight">
                            Shop by Category.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to="/shop"
                            className="relative group overflow-hidden block w-full aspect-[4/3] md:aspect-[3/2] bg-gray-100 cursor-pointer"
                        >
                            {/* Dark gradient overlay at the bottom for text readability */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                            <img
                                src={category.image}
                                alt={category.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 items-center">
                                <h3 className="text-white text-4xl md:text-6xl font-poppins font-semibold uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                                    {category.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
