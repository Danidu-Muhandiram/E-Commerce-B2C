import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import heroImg from '../../assets/image2.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-fashion-moss overflow-hidden">

      {/* 1. Background Typography - Centered & Layered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-black font-playfair text-fashion-eggshell uppercase tracking-tighter opacity-3 select-none z-0">
          TIMELESS
        </h1>
      </div>

      {/* 2. Main Visual - Centered Model (Overlapping Text) */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
        <img
          src={heroImg}
          alt="Fashion Collection"
          className="h-[120%] md:h-[130%] object-contain drop-shadow-2xl translate-y-60"
        />
      </div>

      {/* 3. Content Layer - Split Bottom */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 md:pb-8 container mx-auto px-6">

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full">

          {/* Bottom Left: CTA & Intro */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-left">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-fashion-eggshell mb-6 leading-tight">
              Wear the Moment.
            </h2>
            <p className="text-fashion-eggshell/80 font-poppins text-base mb-8 leading-relaxed max-w-sm font-medium">
              Crafted for the individual who dares to be seen. A curation of bold aesthetics and understated luxury.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-fashion-eggshell text-fashion-moss px-10 py-4 rounded-full font-poppins font-semibold text-sm uppercase tracking-wide hover:bg-white transition-all duration-300 shadow-xl group"
            >
              Explore Collection
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Video Preview Card Removed as per request */}

        </div>
      </div>
      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-fashion-moss via-fashion-moss/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
