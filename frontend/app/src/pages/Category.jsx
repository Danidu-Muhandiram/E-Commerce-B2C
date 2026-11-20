import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Placeholder Images
import { editorialImg } from '../lib/cloudinary';

const cat1 = 'veloura/banners/banner1';
const cat2 = 'veloura/banners/banner2';
const cat3 = 'veloura/banners/banner3';
const cat4 = 'veloura/banners/banner4';
const versions = { [cat1]: 1795156256, [cat2]: 1795156335, [cat3]: 1795156336, [cat4]: 1795156260 };

const categories = [
    { id: 1, name: "Women's", image: cat1, link: "#" },
    { id: 2, name: "Men's", image: cat2, link: "#" },
    { id: 3, name: "Kids", image: cat3, link: "#" },
    { id: 4, name: "Home & Living", image: cat4, link: "#" },
    { id: 5, name: "Accessories", image: cat2, link: "#" },
    { id: 6, name: "Footwear", image: cat1, link: "#" },
    { id: 7, name: "Beauty", image: cat4, link: "#" },
    { id: 8, name: "Gifts", image: cat3, link: "#" },
];

const Category = () => {
    // Scroll to top it's a new page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white min-h-screen px-6 md:px-16 pt-12 pb-24">
            <div className="max-w-[1400px] mx-auto">
                {/* Page Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-fashion-moss/60" />
                        <span className="text-fashion-moss text-sm font-medium">
                            Explore collections
                        </span>
                        <div className="w-12 h-[1px] bg-fashion-moss/60" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-fashion-black tracking-tight">
                        All categories
                    </h1>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="group relative w-full aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <img
                                {...editorialImg(category.image, '(min-width: 1024px) 25vw, 50vw', versions[category.image])}
                                alt={category.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                                <h3 className="text-white font-playfair text-2xl md:text-3xl mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {category.name}
                                </h3>
                                <Link
                                    to={category.link}
                                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 bg-white text-fashion-black px-8 py-3 text-sm font-medium hover:bg-fashion-eggshell"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
