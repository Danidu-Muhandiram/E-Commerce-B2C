import { useState } from 'react';
import { Link } from 'react-router-dom';
import looks from '../data/looks';
import { ACCESSORY_CATEGORIES, getProductBySlug } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { cldUrl, editorialImg } from '../lib/cloudinary';
import { finalPrice, formatPrice } from '../lib/format';

const pad = (n) => String(n).padStart(2, '0');

const lookItems = (look) => look.items.map(getProductBySlug).filter(Boolean);

// every piece from the looks, once each
const collection = [...new Map(looks.flatMap(lookItems).map((p) => [p.slug, p])).values()];

const FILTERS = [
    { value: 'all', label: 'All', test: () => true },
    { value: 'clothing', label: 'Clothing', test: (p) => !ACCESSORY_CATEGORIES.includes(p.category) },
    { value: 'accessories', label: 'Accessories', test: (p) => ACCESSORY_CATEGORIES.includes(p.category) },
];

const Seasonal = () => {
    const [filter, setFilter] = useState('all');
    const shown = collection.filter(FILTERS.find((f) => f.value === filter).test);

    return (
        <>
            <section className="bg-fashion-eggshell px-4 md:px-10 lg:px-16 pt-12 pb-14 md:pt-16">
                <div className="mx-auto max-w-[1400px]">
                    <nav aria-label="Breadcrumb" className="text-xs text-fashion-black/50">
                        <Link to="/" className="hover:text-fashion-black">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-fashion-black">Seasonal</span>
                    </nav>
                    <p className="mt-8 text-sm font-medium text-fashion-moss">Resort 2027</p>
                    <h1 className="mt-3 font-playfair text-5xl md:text-7xl tracking-tight text-fashion-black">
                        Summer, <em className="italic text-fashion-moss">unhurried.</em>
                    </h1>
                    <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-fashion-black/70">
                        Four looks for long days and island heat. Shop each one piece by piece, or browse the
                        whole edit below.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {looks.map((look, i) => (
                            <a
                                key={look.name}
                                href={`#look-${pad(i + 1)}`}
                                className="border border-fashion-black/20 px-3 py-1.5 text-xs font-medium text-fashion-black transition-colors hover:border-fashion-black"
                            >
                                {pad(i + 1)} &middot; {look.name}
                            </a>
                        ))}
                        <a
                            href="#collection"
                            className="px-3 py-1.5 text-xs font-medium text-fashion-moss underline underline-offset-4 hover:text-fashion-black"
                        >
                            Shop the edit
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 md:px-10 lg:px-16 py-14 md:py-20">
                <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-24">
                    {looks.map((look, i) => {
                        const items = lookItems(look);
                        const total = items.reduce((sum, p) => sum + finalPrice(p), 0);
                        return (
                            <article
                                key={look.name}
                                id={`look-${pad(i + 1)}`}
                                className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2 lg:gap-16"
                            >
                                <div className={`aspect-[4/5] overflow-hidden bg-fashion-gray ${i % 2 ? 'md:order-last' : ''}`}>
                                    <img
                                        {...editorialImg(look.image, '(min-width: 768px) 50vw, 100vw')}
                                        alt={look.alt}
                                        loading={i === 0 ? 'eager' : 'lazy'}
                                        decoding="async"
                                        style={{ objectPosition: look.focus }}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="lg:px-8">
                                    <p className="text-xs font-medium tabular-nums text-fashion-moss">
                                        Look {pad(i + 1)} of {pad(looks.length)}
                                    </p>
                                    <h2 className="mt-2 font-playfair text-4xl md:text-5xl italic tracking-tight text-fashion-black">
                                        {look.name}
                                    </h2>

                                    <ul className="mt-8 divide-y divide-fashion-black/10 border-y border-fashion-black/10">
                                        {items.map((p) => (
                                            <li key={p.slug}>
                                                <Link to={`/product/${p.slug}`} className="group flex items-center gap-4 py-3">
                                                    <span className="h-20 w-16 shrink-0 overflow-hidden bg-fashion-gray">
                                                        <img
                                                            src={cldUrl(p.images[0].publicId, { width: 160 })}
                                                            alt=""
                                                            loading="lazy"
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </span>
                                                    <span className="min-w-0 flex-1">
                                                        <span className="block text-sm text-fashion-black group-hover:underline underline-offset-4">
                                                            {p.name}
                                                        </span>
                                                        <span className="block text-xs text-fashion-black/50">{p.colors.join(', ')}</span>
                                                    </span>
                                                    <span className={`text-sm tabular-nums ${p.discountPrice != null ? 'text-fashion-terracotta' : 'text-fashion-black/70'}`}>
                                                        {formatPrice(finalPrice(p))}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="mt-4 flex justify-between text-sm font-medium text-fashion-black">
                                        <span>Full look</span>
                                        <span className="tabular-nums">{formatPrice(total)}</span>
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section id="collection" className="scroll-mt-24 bg-fashion-eggshell px-4 md:px-10 lg:px-16 py-14 md:py-20">
                <div className="mx-auto max-w-[1400px]">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-fashion-moss">The edit</p>
                            <h2 className="mt-2 font-playfair text-4xl md:text-5xl tracking-tight text-fashion-black">
                                Every piece from Resort 2027
                            </h2>
                        </div>
                        <p className="text-sm tabular-nums text-fashion-black/50">
                            {shown.length} {shown.length === 1 ? 'piece' : 'pieces'}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2 border-y border-fashion-black/15 py-4" role="group" aria-label="Filter">
                        {FILTERS.map((f) => (
                            <button
                                key={f.value}
                                type="button"
                                onClick={() => setFilter(f.value)}
                                aria-pressed={filter === f.value}
                                className={`border px-3 py-1.5 text-xs font-medium transition-colors ${filter === f.value ? 'border-fashion-black bg-fashion-black text-fashion-eggshell' : 'border-fashion-black/20 text-fashion-black hover:border-fashion-black'}`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                        {shown.map((p) => (
                            <ProductCard key={p._id} product={p} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Seasonal;
