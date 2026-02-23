import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import img1 from '../../assets/new1.jpg';
import img2 from '../../assets/new2.jpg';
import img3 from '../../assets/new3.jpg';
import img4 from '../../assets/new5.jpg';

const slides = [
  {
    id: 1,
    bgText: "TIMELESS",
    title: "Wear the Moment.",
    subtitle: "Crafted for the individual who dares to be seen. A curation of bold aesthetics and understated luxury.",
    image: img1
  },
  {
    id: 2,
    bgText: "ELEGANCE",
    title: "Elevate Style.",
    subtitle: "Redefining modern luxury with cuts that breathe and fabrics that move with you. The new standard of elegance.",
    image: img2
  },
  {
    id: 3,
    bgText: "MODERN",
    title: "Urban Chic.",
    subtitle: "For the bold and the beautiful. Discover the trends that are shaping the future of fashion today.",
    image: img3
  },
  {
    id: 4,
    bgText: "VIBRANT",
    title: "Stand Out.",
    subtitle: "Express yourself with bold designs and striking silhouettes that turn heads everywhere you go.",
    image: img4
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
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-0px)] flex flex-col md:flex-row bg-fashion-black overflow-hidden">

      {/* Main Content (100%) */}
      <div className="relative w-full h-full flex flex-col justify-between overflow-hidden group">

        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 key={`bg-${current}`} className="text-[15vw] md:text-[18vw] font-black font-playfair text-fashion-eggshell/5 uppercase tracking-tighter select-none animate-pulse-slow transition-all duration-700">
            {slides[current].bgText}
          </h1>
        </div>

        {/* Main Image Layer (Background Cover & Overlays) */}
        <div className="absolute inset-0 z-10 transition-transform duration-1000 ease-out">
          {/* Subtle 5% overlay */}
          <div className="absolute inset-0 bg-fashion-black/5 z-10"></div>

          {/* Vignette & Soft Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.1)_100%)] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent z-10"></div>

          {/* Noise/Grain Texture (using CSS backdrop filter or pure CSS styling pattern) */}
          <div className="absolute inset-0 z-[11] opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

          <img
            key={`img-${current}`}
            src={slides[current].image}
            alt="Fashion Model"
            className="w-full h-full object-cover object-center md:object-[75%_15%] transition-opacity duration-1000 animate-fade-in"
          />
        </div>

        {/* Decorative Vertical Text */}
        <div className="hidden lg:flex absolute top-[20%] left-8 z-30 pointer-events-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <span className="text-fashion-eggshell/50 font-poppins text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">
            The Veloura Editorial • Volume 01
          </span>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-16 px-6 md:px-24 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto relative">

            {/* Fine Line & Mini Heading */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="w-6 h-[1px] bg-fashion-eggshell/60" />
              <span className="text-fashion-eggshell/80 font-poppins text-[10px] tracking-[0.3em] uppercase">
                Discover The {slides[current].bgText} Collection
              </span>
            </div>

            <h2 key={`title-${current}`} className="text-5xl md:text-7xl font-playfair font-bold text-fashion-eggshell mb-6 leading-[1.1] animate-slide-in-left tracking-tight">
              {slides[current].title}
            </h2>
            <p key={`sub-${current}`} className="text-fashion-eggshell/70 font-poppins text-sm md:text-base mb-10 leading-relaxed max-w-md font-normal animate-fade-in-up">
              {slides[current].subtitle}
            </p>

            {/* Premium Ghost Button */}
            <div className="flex gap-4 items-center">
              <Link
                to="/shop"
                className="group relative inline-flex items-center justify-center bg-transparent text-fashion-eggshell px-10 py-4 font-poppins font-medium text-[11px] uppercase tracking-[0.3em] transition-all duration-500 border border-fashion-eggshell/30 hover:border-fashion-eggshell hover:bg-fashion-eggshell/5"
              >
                <span className="relative z-10 flex items-center gap-4 transition-colors duration-500">
                  Explore Collection
                  <FaArrowRight className="w-3 h-3 opacity-70 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300" />
                </span>
              </Link>

              {/* Mobile Navigation Controls (Visible only on mobile) */}
              <div className="flex md:hidden gap-2 ml-4">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-fashion-eggshell/30 flex items-center justify-center text-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-moss transition">
                  <FaArrowLeft size={12} />
                </button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-fashion-eggshell/30 flex items-center justify-center text-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-moss transition">
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Slider Indicators (01 — 02) */}
      <div className="absolute bottom-12 left-6 md:left-24 lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-6 z-30 pointer-events-auto mix-blend-difference">
        {slides.map((_, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => handleSlideChange(index)}
            >
              <span className={`font-poppins text-xs font-semibold tracking-widest transition-colors duration-500 ${isActive ? 'text-fashion-eggshell' : 'text-fashion-eggshell/40 group-hover:text-fashion-eggshell/70'}`}>
                0{index + 1}
              </span>
              <div className={`h-[1px] transition-all duration-700 ease-in-out ${isActive ? 'w-12 bg-fashion-eggshell' : 'w-4 bg-fashion-eggshell/30 group-hover:w-8 group-hover:bg-fashion-eggshell/50'}`} />
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Hero;
