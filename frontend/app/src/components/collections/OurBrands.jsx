import React, { useRef, useState } from 'react';

// Reusing popular images as placeholders for brand logos for now
import brand1 from '../../assets/popular1.jpg';
import brand2 from '../../assets/popular2.jpg';
import brand3 from '../../assets/popular3.jpg';

const brands = [
    { id: 1, image: brand1, name: 'Brand 1' },
    { id: 2, image: brand2, name: 'Brand 2' },
    { id: 3, image: brand3, name: 'Brand 3' },
    { id: 4, image: brand1, name: 'Brand 4' },
    { id: 5, image: brand2, name: 'Brand 5' },
    { id: 6, image: brand3, name: 'Brand 6' },
];

const OurBrands = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToBrand = (index) => {
        if (scrollContainerRef.current) {
            // Estimate card width + gap for scrolling
            const cardWidth = 200 + 32;
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    // Update active dot on manual scroll
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollPosition = scrollContainerRef.current.scrollLeft;
            const cardWidth = 200 + 32;
            const newIndex = Math.round(scrollPosition / cardWidth);
            setActiveIndex(newIndex);
        }
    };

    return (
        <section className="bg-white py-16 px-6 md:px-16 w-full relative z-10 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col mb-12">
                    {/* Fine Line & Mini Heading */}
                    <div className="flex justify-center md:justify-start items-center gap-4 mb-6">
                        <div className="w-8 h-[1px] bg-fashion-moss/60" />
                        <span className="text-fashion-moss font-poppins text-[10px] tracking-[0.3em] uppercase font-semibold">
                            Explore
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-black tracking-tight mb-4 uppercase text-center md:text-left">
                        Our Brands.
                    </h2>
                    <p className="text-fashion-black/70 font-poppins text-sm md:text-base max-w-2xl text-center md:text-left">
                        Discover our carefully curated selection of partner labels. Each brand is chosen for its exceptional craftsmanship, modern aesthetic, and commitment to accessible luxury.
                    </p>
                </div>

                {/* Brands Slider */}
                <div className="w-full relative">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden items-center"
                    >
                        {brands.map((brand) => (
                            <div
                                key={brand.id}
                                className="snap-center flex-shrink-0 w-[240px] md:w-[320px] aspect-square bg-gray-50 flex items-center justify-center transition-all duration-500 cursor-pointer overflow-hidden group"
                            >
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center items-center gap-3 mt-4">
                        {brands.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToBrand(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-fashion-black scale-125'
                                    : 'bg-fashion-black/20 hover:bg-fashion-black/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBrands;
