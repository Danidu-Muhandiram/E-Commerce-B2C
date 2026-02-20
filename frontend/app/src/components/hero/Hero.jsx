import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import testImg from '../../assets/testimage2.png';

const slides = [
  {
    id: 1,
    bgText: "TIMELESS",
    title: "Wear the Moment.",
    subtitle: "Crafted for the individual who dares to be seen. A curation of bold aesthetics and understated luxury.",
    image: testImg
  },
  {
    id: 2,
    bgText: "ELEGANCE",
    title: "Elevate Style.",
    subtitle: "Redefining modern luxury with cuts that breathe and fabrics that move with you. The new standard of elegance.",
    image: testImg
  },
  {
    id: 3,
    bgText: "MODERN",
    title: "Urban Chic.",
    subtitle: "For the bold and the beautiful. Discover the trends that are shaping the future of fashion today.",
    image: testImg
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideChange = (index) => {
    setCurrent(index);
  };

  // Auto-play for main slider if desired, or just let users control it
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-40px)] flex flex-col md:flex-row bg-fashion-moss overflow-hidden">

      {/* LEFT SIDE: Main Content (66%) */}
      <div className="relative w-full md:w-2/3 h-full flex flex-col justify-between overflow-hidden group">

        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 key={`bg-${current}`} className="text-[15vw] md:text-[18vw] font-black font-playfair text-fashion-eggshell/10 uppercase tracking-tighter select-none animate-pulse-slow transition-all duration-700">
            {slides[current].bgText}
          </h1>
        </div>

        {/* Main Image Layer (Background Cover) */}
        <div className="absolute inset-0 z-10 transition-transform duration-1000 ease-out">
          <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Dark Overlay for text contrast */}
          <img
            key={`img-${current}`}
            src={slides[current].image}
            alt="Fashion Model"
            className="w-full h-full object-cover object-[75%_15%] transition-opacity duration-1000 animate-fade-in"
          />
        </div>


        {/* Content Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-12 px-6 md:px-16 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <h2 key={`title-${current}`} className="text-4xl md:text-7xl font-playfair font-bold text-fashion-eggshell mb-4 leading-none animate-slide-in-left">
              {slides[current].title}
            </h2>
            <p key={`sub-${current}`} className="text-fashion-eggshell/80 font-poppins text-sm md:text-lg mb-8 leading-relaxed max-w-lg font-medium animate-fade-in-up">
              {slides[current].subtitle}
            </p>
            <div className="flex gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-fashion-eggshell text-fashion-moss px-8 py-3 rounded-full font-poppins font-semibold text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Explore Collection
              </Link>
              {/* Mobile Navigation Controls (Visible only on mobile) */}
              <div className="flex md:hidden gap-2">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-fashion-eggshell/30 flex items-center justify-center text-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-moss transition">
                  <FaArrowLeft />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-fashion-eggshell/30 flex items-center justify-center text-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-moss transition">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Navigation / Mini Slider (33%) */}
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

    </section>
  );
};

export default Hero;
