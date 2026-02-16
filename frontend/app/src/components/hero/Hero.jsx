import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import heroImg from '../../assets/image2.png';

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-48px)] mt-12 bg-gray-200 overflow-hidden">

      {/* 1. Background Typography - Centered & Layered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[12vw] font-black font-playfair text-fashion-red uppercase tracking-tighter opacity-90 select-none z-0">
          TIMELESS
        </h1>
      </div>

      {/* 2. Main Visual - Centered Model (Overlapping Text) */}
      <div className="absolute inset-0 flex items-end justify-center z-10">
        <img
          src={heroImg}
          alt="Fashion Collection"
          className="h-[90%] md:h-[95%] object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3. Content Layer - Split Bottom */}
      <div className="container mx-auto px-6 h-full relative z-20 flex flex-col justify-between pb-10">

        {/* Spacer for Top Content */}
        <div className="flex-grow"></div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full">

          {/* Bottom Left: CTA & Intro */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-left">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-black mb-4 leading-tight">
              Wear the Moment.
            </h2>
            <p className="text-gray-600 font-poppins text-sm mb-6 leading-relaxed max-w-xs">
              Crafted for the individual who dares to be seen. A curation of bold aesthetics and understated luxury.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-poppins font-semibold text-sm uppercase tracking-wide hover:bg-fashion-red transition-all duration-300 shadow-lg group"
            >
              Explore Collection
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Bottom Right: Video Preview Card */}
          <div className="w-full md:w-auto">
            <div className="relative group cursor-pointer overflow-hidden rounded-3xl w-48 h-32 md:w-64 md:h-40 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop"
                alt="Campaign Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full shadow-lg">
                  <FaPlay className="text-fashion-red ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
