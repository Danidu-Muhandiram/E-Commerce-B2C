import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';

const TopBar = () => {
  return (
    <div className="bg-white text-gray-800 py-2 px-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center text-sm font-poppins">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <RiTwitterXLine className="w-4 h-4" />
          </a>
        </div>
        <div className="text-center w-full md:w-auto">
          <span>We ship worldwide | 30-day return policy</span>
        </div>
        <div className="hidden md:block">
          <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;