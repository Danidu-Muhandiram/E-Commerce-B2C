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

        {/* Main Image Layer (Background Cover & Overlays) */}
        <div className="absolute inset-0 z-10 transition-transform duration-1000 ease-out">

          {/* Subtle 5% overlay */}
          <div className="absolute inset-0 bg-fashion-black/5 z-10"></div>

          {/* Vignette & Soft Moss Gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.1)_100%)] z-10 pointer-events-none"></div>

          {/* Top Navbar Shadow */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fashion-black/20 to-transparent z-10 pointer-events-none"></div>

          {/* Left/Bottom Content Area Shadow for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-fashion-black/60 via-fashion-black/20 to-transparent w-full md:from-fashion-black/30 md:via-fashion-black/5 md:w-[65%] z-10 pointer-events-none"></div>

          {/* Heavy Bottom Gradient specifically for Mobile Text */}
          <div className="absolute inset-x-0 bottom-0 h-[65%] md:h-1/2 bg-gradient-to-t from-fashion-black/80 via-fashion-black/40 to-transparent md:from-fashion-black/40 md:via-fashion-black/10 z-10 pointer-events-none"></div>

          {/* Noise/Grain Texture */}
          <div className="absolute inset-0 z-[11] opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

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
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-28 md:pb-16 px-6 md:px-24 pointer-events-none">
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
            </div>
          </div>
        </div>
      </div>

      {/* Next Slide Preview Card (Right Side Middle) */}
      <div
        className="absolute top-[40%] -translate-y-1/2 right-8 md:right-24 z-30 hidden lg:flex items-center gap-6 pointer-events-auto cursor-pointer group"
        onClick={nextSlide}
      >
        {/* Text Area (Left of Image) */}
        <div className="flex flex-col items-end gap-2 transform group-hover:-translate-x-2 transition-transform duration-500">
          <div className="flex items-center gap-3 w-full justify-end mb-1">
            <span className="text-fashion-eggshell/60 font-poppins text-[10px] tracking-[0.4em] uppercase group-hover:text-fashion-eggshell transition-colors duration-300">
              Up Next
            </span>
            <div className="h-[1px] w-8 bg-fashion-eggshell/40 group-hover:bg-fashion-eggshell group-hover:w-16 transition-all duration-500" />
          </div>
          <h4 className="text-fashion-eggshell font-playfair text-xl md:text-2xl leading-tight tracking-wide text-right drop-shadow-md">
            {slides[(current + 1) % slides.length].title}
          </h4>
        </div>

        {/* Sleek Image Card (No Title) */}
        <div className="relative w-40 h-56 md:w-56 md:h-80 overflow-hidden border border-fashion-eggshell/20 group-hover:border-fashion-eggshell/60 transition-all duration-500 shadow-xl">
          <div className="absolute inset-0 bg-fashion-black/20 group-hover:bg-fashion-black/0 transition-colors duration-500 z-10" />
          <img
            src={slides[(current + 1) % slides.length].image}
            alt="Next Slide"
            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Redesigned Slider Indicators (Bottom Right Wala) */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-24 z-30 flex items-center gap-4 md:gap-6 pointer-events-auto scale-90 md:scale-100 origin-bottom-right">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-fashion-eggshell/30 flex items-center justify-center text-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-moss transition-colors duration-300"
          aria-label="Previous Slide"
        >
          <FaArrowLeft size={12} />
        </button>

        <div className="relative flex items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border border-fashion-eggshell/20 cursor-pointer overflow-hidden backdrop-blur-sm group group-hover:border-fashion-eggshell/50 transition-colors duration-500">
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(240, 234, 214, 0.4)"
              strokeWidth="2"
              strokeDasharray="301.59"
              strokeDashoffset={301.59 - (301.59 * (current + 1)) / slides.length}
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="flex items-baseline text-fashion-eggshell font-playfair pl-1 pt-1">
            <span className="text-2xl md:text-3xl font-black">{current + 1}</span>
            <span className="text-fashion-eggshell/50 text-[10px] md:text-xs ml-1 font-medium">/ {slides.length}</span>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-fashion-eggshell/30 flex items-center justify-center text-fashion-eggshell hover:bg-fashion-eggshell hover:text-fashion-moss transition-colors duration-300"
          aria-label="Next Slide"
        >
          <FaArrowRight size={12} />
        </button>
      </div>

    </section>
  );
};

export default Hero;
