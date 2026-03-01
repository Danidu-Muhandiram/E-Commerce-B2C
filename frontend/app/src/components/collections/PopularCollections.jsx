import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import imgFemale from '../../assets/popular1.jpg';
import imgMale from '../../assets/popular2.jpg';
import imgKids from '../../assets/popular3.jpg';

const collections = [
    {
        id: 1,
        title: "Women's Collection",
        subtitle: 'Elegance defined. Discover the latest styles.',
        tag: 'FOR HER',
        image: imgFemale,
        span: 'md:col-span-8',
        height: 'h-[450px] md:h-[650px]',
    },
    {
        id: 2,
        title: "Men's Collection",
        subtitle: 'Sharp & Sophisticated.',
        tag: 'FOR HIM',
        image: imgMale,
        span: 'md:col-span-4',
        height: 'h-[320px] md:h-[313px]',
    },
    {
        id: 3,
        title: "Kids' Collection",
        subtitle: 'Playful & Comfortable.',
        tag: 'FOR KIDS',
        image: imgKids,
        span: 'md:col-span-4',
        height: 'h-[320px] md:h-[313px]',
    },
];

const PopularCollections = () => {
    return (
        <section className="bg-fashion-eggshell py-16 md:py-20 px-6 md:px-16 w-full relative z-10">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                        {/* Fine Line & Mini Heading */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-fashion-moss/60" />
                            <span className="text-fashion-moss font-poppins text-[10px] tracking-[0.3em] uppercase font-semibold">
                                Curated Styles
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-black leading-[1.1] tracking-tight">
                            Popular Collections.
                        </h2>
                    </div>

                    <Link
                        to="/shop"
                        className="group flex items-center gap-3 text-fashion-moss hover:text-fashion-black transition-colors duration-300 font-poppins text-[11px] font-bold uppercase tracking-[0.2em] pb-2 border-b border-fashion-moss/30 hover:border-fashion-black"
                    >
                        View All Collections
                        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Collection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Main Feature Banner */}
                    <div className={`relative group overflow-hidden ${collections[0].span} ${collections[0].height} cursor-pointer`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                        <img
                            src={collections[0].image}
                            alt={collections[0].title}
                            className="w-full h-full object-cover object-[75%_15%] transition-transform duration-1000 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12">
                            <div className="flex justify-between items-start">
                                <span className="bg-fashion-eggshell text-fashion-black px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.2em]">
                                    {collections[0].tag}
                                </span>
                            </div>

                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-eggshell mb-3">
                                    {collections[0].title}
                                </h3>
                                <p className="text-fashion-eggshell/80 font-poppins text-sm max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {collections[0].subtitle}
                                </p>
                                <div className="inline-flex items-center gap-3 text-fashion-eggshell font-poppins text-[10px] font-bold uppercase tracking-[0.2em] group/btn">
                                    Explore <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        {collections.slice(1).map((collection) => (
                            <div key={collection.id} className={`relative group overflow-hidden w-full ${collection.height} cursor-pointer`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
                                    <div>
                                        <span className="text-fashion-eggshell font-poppins text-[9px] font-semibold uppercase tracking-[0.2em] border border-fashion-eggshell/30 px-3 py-1 backdrop-blur-sm">
                                            {collection.tag}
                                        </span>
                                    </div>

                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-fashion-eggshell mb-2">
                                            {collection.title}
                                        </h3>
                                        <div className="inline-flex items-center gap-2 text-fashion-eggshell/80 group-hover:text-fashion-eggshell font-poppins text-[10px] uppercase tracking-[0.1em] transition-colors duration-300">
                                            Shop Now <FaArrowRight className="w-2 h-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PopularCollections;
