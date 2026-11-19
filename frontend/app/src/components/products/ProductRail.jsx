import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import ProductCard from './ProductCard';

// A row needs a few products to look intentional; below this the section hides
// itself until more products are added.
const MIN_PRODUCTS = 4;

const ProductRail = ({ eyebrow, title, link, linkLabel = 'View all', products, tone = 'white' }) => {
    const trackRef = useRef(null);

    if (products.length < MIN_PRODUCTS) return null;

    const scroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.firstElementChild;
        const step = card ? card.getBoundingClientRect().width + 16 : 300;
        track.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    return (
        <section className={`${tone === 'eggshell' ? 'bg-fashion-eggshell' : 'bg-white'} px-4 md:px-10 lg:px-16 py-14 md:py-20`}>
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-8 flex items-end justify-between gap-6">
                    <div>
                        {eyebrow && <p className="text-sm font-medium text-fashion-moss">{eyebrow}</p>}
                        <h2 className="mt-1 font-playfair text-3xl md:text-4xl tracking-tight text-fashion-black">{title}</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {link && (
                            <Link
                                to={link}
                                className="group hidden sm:inline-flex items-center gap-1 text-sm font-medium text-fashion-moss transition-colors hover:text-fashion-black"
                            >
                                {linkLabel}
                                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        )}
                        <div className="hidden md:flex gap-2">
                            <button
                                type="button"
                                onClick={() => scroll(-1)}
                                aria-label={`Scroll ${title} left`}
                                className="grid h-10 w-10 place-items-center border border-fashion-black/15 text-fashion-black transition-colors hover:border-fashion-black"
                            >
                                <FiArrowLeft className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scroll(1)}
                                aria-label={`Scroll ${title} right`}
                                className="grid h-10 w-10 place-items-center border border-fashion-black/15 text-fashion-black transition-colors hover:border-fashion-black"
                            >
                                <FiArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={trackRef}
                    className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
                >
                    {products.map((product) => (
                        <div key={product._id} className="w-[70%] shrink-0 snap-start sm:w-[42%] md:w-[31%] lg:w-[calc(25%-12px)]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {link && (
                    <Link to={link} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-fashion-moss sm:hidden">
                        {linkLabel}
                        <FiArrowUpRight className="h-4 w-4" />
                    </Link>
                )}
            </div>
        </section>
    );
};

export default ProductRail;
