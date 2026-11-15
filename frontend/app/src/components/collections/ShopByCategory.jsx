import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

import women from '../../assets/popular1.jpg';
import men from '../../assets/popular2.jpg';
import kids from '../../assets/popular3.jpg';
import coat from '../../assets/new3.webp';
import basket from '../../assets/new5.webp';
import panama from '../../assets/new1.webp';
import sunnies from '../../assets/new2.webp';

// `focus` is the point of interest in the photo (x% y%); `zoom` crops in on it,
// so accessory categories show the actual item rather than the whole model.
// Piece counts are placeholders until the products API provides them.
const categories = [
    { name: 'Women', count: 214, image: women, focus: '47% 40%', zoom: 1 },
    { name: 'Men', count: 168, image: men, focus: '50% 30%', zoom: 1 },
    { name: 'Kids', count: 92, image: kids, focus: '50% 45%', zoom: 1 },
    { name: 'Outerwear', count: 41, image: coat, focus: '52% 55%', zoom: 1.1 },
    { name: 'Bags', count: 57, image: basket, focus: '54% 70%', zoom: 2.4 },
    { name: 'Hats', count: 23, image: panama, focus: '49% 14%', zoom: 2.6 },
    { name: 'Eyewear', count: 36, image: sunnies, focus: '45% 19%', zoom: 3 },
];

const Crop = ({ category, className = '', ...rest }) => (
    <img
        src={category.image}
        alt=""
        loading="lazy"
        decoding="async"
        style={{
            objectPosition: category.focus,
            transformOrigin: category.focus,
            transform: `scale(${category.zoom})`,
        }}
        className={`h-full w-full object-cover ${className}`}
        {...rest}
    />
);

const ShopByCategory = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="bg-white px-4 md:px-10 lg:px-16 pt-10 pb-20 w-full relative z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-end justify-between gap-6 mb-8 lg:mb-12">
                    <h2 className="text-3xl md:text-4xl font-playfair text-fashion-black tracking-tight">
                        Shop by category
                    </h2>
                    <Link
                        to="/category"
                        className="group inline-flex items-center gap-1 text-sm font-medium text-fashion-moss hover:text-fashion-black transition-colors"
                    >
                        All categories
                        <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 xl:gap-20 items-start">
                    {/* Index */}
                    <ul className="border-b border-fashion-black/15">
                        {categories.map((category, i) => {
                            const isActive = i === active;
                            return (
                                <li key={category.name} className="border-t border-fashion-black/15">
                                    <Link
                                        to="/shop"
                                        onMouseEnter={() => setActive(i)}
                                        onFocus={() => setActive(i)}
                                        className="group flex items-center gap-4 lg:gap-6 py-3 lg:py-5"
                                    >
                                        {/* Thumbnail — mobile/tablet only, desktop uses the preview */}
                                        <span className="lg:hidden h-[72px] w-14 shrink-0 overflow-hidden bg-fashion-gray">
                                            <Crop category={category} />
                                        </span>

                                        <span className="text-xs tabular-nums text-fashion-black/40 w-6 hidden lg:block">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>

                                        <span
                                            className={`flex-1 font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none tracking-tight transition-colors duration-300 text-fashion-black ${isActive ? 'lg:text-fashion-black' : 'lg:text-fashion-black/30'}`}
                                        >
                                            {category.name}
                                        </span>

                                        <span className="text-sm tabular-nums text-fashion-black/50 whitespace-nowrap">
                                            {category.count} pieces
                                        </span>

                                        <FiArrowUpRight
                                            className={`h-5 w-5 shrink-0 text-fashion-moss transition-all duration-300 ${isActive ? 'lg:opacity-100 lg:translate-x-0' : 'lg:opacity-0 lg:-translate-x-2'}`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Preview — desktop only, follows the hovered category */}
                    <div className="hidden lg:block sticky top-28">
                        <div className="relative aspect-[4/5] overflow-hidden bg-fashion-gray">
                            {categories.map((category, i) => (
                                <div
                                    key={category.name}
                                    aria-hidden="true"
                                    className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${i === active ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <Crop category={category} />
                                </div>
                            ))}
                            <span className="absolute bottom-3 left-3 bg-fashion-eggshell px-3 py-1.5 text-sm text-fashion-black">
                                <span className="font-playfair italic">{categories[active].name}</span>
                                <span className="text-fashion-black/50"> &middot; {categories[active].count} pieces</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
