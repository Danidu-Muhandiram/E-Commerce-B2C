import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const HeroRightPanelTemp = ({ slides, current, handleSlideChange, prevSlide, nextSlide }) => {
    return (
        <div className="hidden md:flex w-1/3 h-full bg-[#E5DCC5] relative flex-col justify-center px-8 border-l border-fashion-moss/10 z-30">

            {/* Carousel Container */}
            <div className="flex flex-col gap-6 max-h-[80vh] mt-16">
                {slides.map((slide, index) => {
                    const isActive = index === current;
                    return (
                        <div
                            key={slide.id}
                            onClick={() => handleSlideChange(index)}
                            className={`group relative cursor-pointer transition-all duration-500 ease-out
                          ${isActive ? 'h-64 py-4 opacity-100' : 'h-24 opacity-40 hover:opacity-70 hover:h-28'}
                      `}
                        >
                            {/* Image Container */}
                            <div className={`
                          relative w-full h-full overflow-hidden rounded-xl shadow-lg transition-all duration-500
                          ${isActive ? 'shadow-2xl' : 'grayscale'}
                      `}>
                                <img
                                    src={slide.image}
                                    alt={slide.bgText}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Text */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-fashion-moss/90 via-transparent to-transparent">
                                    {isActive && (
                                        <>
                                            <p className="text-fashion-eggshell text-xs font-bold tracking-widest mb-1 animate-fade-in">0{index + 1}</p>
                                            <h3 className="text-fashion-eggshell text-2xl font-playfair font-italic animate-slide-up">{slide.bgText}</h3>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Inactive Title (visible when collapsed) */}
                            {!isActive && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-fashion-moss font-bold text-xl tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">{slide.bgText}</h3>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Navigation Info & Controls */}
            <div className="absolute bottom-10 left-8 right-8 flex justify-between items-end">
                <div className="flex items-baseline text-fashion-moss font-playfair leading-none">
                    <span className="font-bold text-4xl mr-1">0{current + 1}</span>
                    <span className="text-fashion-moss/40 text-sm font-medium tracking-wider">/ 0{slides.length}</span>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={prevSlide}
                        className="group/btn w-12 h-12 rounded-full border border-fashion-moss/20 flex items-center justify-center text-fashion-moss hover:bg-fashion-moss hover:text-fashion-eggshell transition-all duration-300"
                    >
                        <FaArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="group/btn w-12 h-12 rounded-full border border-fashion-moss/20 flex items-center justify-center text-fashion-moss hover:bg-fashion-moss hover:text-fashion-eggshell transition-all duration-300"
                    >
                        <FaArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default HeroRightPanelTemp;
