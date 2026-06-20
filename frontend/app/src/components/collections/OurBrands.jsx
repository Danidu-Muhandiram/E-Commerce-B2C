import React, { useRef, useState } from 'react';

const brands = [
    { id: 1, name: 'VALENTIN', subtitle: 'HAUTE COUTURE', style: 'font-playfair tracking-[0.3em] text-xl font-bold' },
    { id: 2, name: 'MAISON D\'OR', subtitle: 'PARIS', style: 'font-playfair tracking-[0.2em] text-lg italic font-medium' },
    { id: 3, name: 'LUMIÈRE', subtitle: 'STUDIOS', style: 'font-poppins tracking-[0.4em] text-base font-semibold' },
    { id: 4, name: 'AURA', subtitle: 'MILANO', style: 'font-playfair tracking-[0.5em] text-2xl font-light' },
    { id: 5, name: 'SARTORIAL', subtitle: 'LONDON', style: 'font-poppins tracking-[0.3em] text-xs font-bold' },
    { id: 6, name: 'ÉCLAT', subtitle: 'NEW YORK', style: 'font-playfair tracking-[0.4em] text-xl font-medium' },
];

const OurBrands = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToBrand = (index) => {
        if (scrollContainerRef.current && scrollContainerRef.current.children[index]) {
            const targetChild = scrollContainerRef.current.children[index];
            // Center the brand card in the scroll view
            const containerWidth = scrollContainerRef.current.offsetWidth;
            const scrollTarget = targetChild.offsetLeft - (containerWidth - targetChild.offsetWidth) / 2;
            
            scrollContainerRef.current.scrollTo({
                left: scrollTarget,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    // Update active dot on manual scroll
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollPosition = scrollContainerRef.current.scrollLeft;
            const children = Array.from(scrollContainerRef.current.children);
            if (children.length === 0) return;

            const containerCenter = scrollPosition + scrollContainerRef.current.offsetWidth / 2;
            let closestIndex = 0;
            let minDistance = Infinity;

            children.forEach((child, index) => {
                const childCenter = child.offsetLeft + child.offsetWidth / 2;
                const distance = Math.abs(containerCenter - childCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
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
                                className="snap-center flex-shrink-0 w-[220px] md:w-[280px] aspect-[4/3] bg-fashion-eggshell/20 border border-fashion-moss/5 hover:border-fashion-moss/20 rounded-[2px] flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md hover:bg-fashion-eggshell/45"
                            >
                                <div className="text-center p-6 select-none">
                                    <h3 className={`${brand.style} text-fashion-moss group-hover:text-fashion-black group-hover:scale-105 transition-all duration-500`}>
                                        {brand.name}
                                    </h3>
                                    {brand.subtitle && (
                                        <p className="text-[9px] font-poppins tracking-[0.3em] text-fashion-moss/50 group-hover:text-fashion-moss/70 mt-2 uppercase transition-colors duration-500">
                                            {brand.subtitle}
                                        </p>
                                    )}
                                </div>
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
