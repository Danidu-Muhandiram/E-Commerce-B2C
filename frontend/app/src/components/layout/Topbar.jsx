import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';

const TopBar = () => {
  return (
    <div className="bg-fashion-eggshell text-fashion-moss h-10 flex items-center px-6 border-b border-stone-200 z-50 relative">
      <div className="container mx-auto flex justify-between items-center text-xs font-poppins tracking-wide w-full">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-fashion-black transition-colors">
            <TbBrandMeta className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-fashion-black transition-colors">
            <IoLogoInstagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-fashion-black transition-colors">
            <RiTwitterXLine className="w-3 h-3" />
          </a>
        </div>
        <div className="text-center w-full md:w-[400px] overflow-hidden font-medium text-fashion-black/80 relative flex items-center">
          <div className="animate-scroll flex gap-6 whitespace-nowrap hover:[animation-play-state:paused] cursor-default">
            <span>COMPLIMENTARY SHIPPING ON ORDERS OVER $200</span>
            <span>•</span>
            <span>FREE RETURNS ON ALL ORDERS</span>
            <span>•</span>
            <span>COMPLIMENTARY SHIPPING ON ORDERS OVER $200</span>
            <span>•</span>
            <span>FREE RETURNS ON ALL ORDERS</span>
            <span>•</span>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="tel:0112886600" className="hover:text-fashion-black transition-colors font-medium">
            0112886600
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;