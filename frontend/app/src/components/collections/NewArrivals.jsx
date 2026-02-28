import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import new1 from '../../assets/new1.jpg';
import new2 from '../../assets/new2.jpg';
import new3 from '../../assets/new3.jpg';
import new5 from '../../assets/new5.jpg';

const products = [
    {
        id: 1,
        title: 'DAISY STREET PRINTED MAXI DRESS',
        price: 'Rs 4,490.00',
        installments: 'or 3 X Rs 1,496.66 with KOKO',
        image: new1,
        isNew: true
    },
    {
        id: 2,
        title: 'BLUE TIE DYE MAXI DRESS',
        price: 'Rs 5,290.00',
        installments: 'or 3 X Rs 1,763.33 with KOKO',
        image: new2,
        isNew: true
    },
    {
        id: 3,
        title: 'SATIN FINISH OCCASION DRESS',
        price: 'Rs 6,490.00',
        installments: 'or 3 X Rs 2,163.33 with KOKO',
        image: new3,
        isNew: true
    },
    {
        id: 4,
        title: 'ZEBRA PRINT WRAP DRESS',
        price: 'Rs 4,990.00',
        installments: 'or 3 X Rs 1,663.33 with KOKO',
        image: new5,
        isNew: true
    },
    // Duplicate for smooth infinite scroll
    {
        id: 5,
        title: 'DAISY STREET PRINTED MAXI DRESS',
        price: 'Rs 4,490.00',
        installments: 'or 3 X Rs 1,496.66 with KOKO',
        image: new1,
        isNew: true
    },
    {
        id: 6,
        title: 'BLUE TIE DYE MAXI DRESS',
        price: 'Rs 5,290.00',
        installments: 'or 3 X Rs 1,763.33 with KOKO',
        image: new2,
        isNew: true
    },
    {
        id: 7,
        title: 'SATIN FINISH OCCASION DRESS',
        price: 'Rs 6,490.00',
        installments: 'or 3 X Rs 2,163.33 with KOKO',
        image: new3,
        isNew: true
    },
    {
        id: 8,
        title: 'ZEBRA PRINT WRAP DRESS',
        price: 'Rs 4,990.00',
        installments: 'or 3 X Rs 1,663.33 with KOKO',
        image: new5,
        isNew: true
    }
];

const NewArrivals = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-16 w-full relative z-10">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                        {/* Fine Line & Mini Heading */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-fashion-moss/60" />
                            <span className="text-fashion-moss font-poppins text-[10px] tracking-[0.3em] uppercase font-semibold">
                                Just Dropped
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-black leading-[1.1] tracking-tight">
                            New Arrivals.
                        </h2>
                    </div>

                    <Link
                        to="/shop"
                        className="group flex items-center gap-3 text-fashion-moss hover:text-fashion-black transition-colors duration-300 font-poppins text-[11px] font-bold uppercase tracking-[0.2em] pb-2 border-b border-fashion-moss/30 hover:border-fashion-black"
                    >
                        View All
                        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Auto-scrolling Carousel Container */}
                <div className="w-full overflow-hidden relative" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-6">
                        {products.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col cursor-pointer w-[280px] md:w-[320px] flex-shrink-0">
                                {/* Image Container */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-5">
                                    {product.isNew && (
                                        <span className="absolute top-0 left-0 bg-white text-fashion-black px-3 py-1.5 text-[10px] sm:text-xs font-poppins tracking-wider z-10">
                                            New
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
                                    <p className="text-fashion-black font-poppins font-bold text-sm mb-1">
                                        {product.price}
                                    </p>
                                    <p className="text-fashion-black/60 font-poppins text-[10px] sm:text-xs tracking-wide">
                                        {product.installments}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
