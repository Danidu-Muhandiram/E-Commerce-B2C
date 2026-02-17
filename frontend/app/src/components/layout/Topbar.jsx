import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';

const TopBar = () => {
  return (
    <div className="bg-fashion-black text-white py-2 px-6 border-b border-gray-800 z-50 relative">
      <div className="container mx-auto flex justify-between items-center text-xs font-poppins tracking-wide">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-fashion-red transition-colors">
            <TbBrandMeta className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-fashion-red transition-colors">
            <IoLogoInstagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-fashion-red transition-colors">
            <RiTwitterXLine className="w-3 h-3" />
          </a>
        </div>
        <div className="text-center w-full md:w-auto font-medium">
          <span>COMPLIMENTARY SHIPPING ON ORDERS OVER $200</span>
        </div>
        <div className="hidden md:block">
          <a href="tel:+1234567890" className="hover:text-fashion-red transition-colors font-medium">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;