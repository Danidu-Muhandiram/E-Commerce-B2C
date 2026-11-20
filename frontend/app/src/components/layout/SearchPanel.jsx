import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineSearch, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import products from '../../data/products';
import { searchProducts } from '../../lib/search';
import { cldUrl } from '../../lib/cloudinary';
import { finalPrice, formatPrice } from '../../lib/format';

const SUGGESTIONS = ['Shirts', 'Hats', 'Linen', 'Bags', 'Sale'];
const MAX_RESULTS = 6;

const SearchPanel = ({ open, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const q = query.trim();
    const results = q ? searchProducts(products, q) : [];

    // focus the input, esc to close, lock scroll
    useEffect(() => {
        if (!open) return;
        inputRef.current?.focus();
        const onKey = (e) => e.key === 'Escape' && onClose();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [open, onClose]);

    const close = () => {
        setQuery('');
        onClose();
    };

    const showAll = (term) => {
        if (term.toLowerCase() === 'sale') navigate('/shop?show=sale');
        else navigate(`/shop?q=${encodeURIComponent(term)}`);
        close();
    };

    return (
        <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
            <div
                onClick={close}
                className={`absolute inset-0 bg-fashion-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-label="Search"
                inert={!open}
                className={`absolute inset-x-0 top-0 max-h-[85svh] overflow-y-auto bg-fashion-eggshell shadow-xl transition-transform duration-300 ease-out motion-reduce:transition-none ${open ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-16 py-6 md:py-8">
                    <form
                        role="search"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (q) showAll(q);
                        }}
                        className="flex items-center gap-3 border-b border-fashion-black/30 pb-3 focus-within:border-fashion-black"
                    >
                        <HiOutlineSearch className="h-6 w-6 shrink-0 text-fashion-black/50" />
                        <input
                            ref={inputRef}
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for shirts, hats, linen..."
                            aria-label="Search products"
                            className="min-w-0 flex-1 bg-transparent font-playfair text-2xl md:text-3xl text-fashion-black outline-none placeholder:text-fashion-black/30 [&::-webkit-search-cancel-button]:hidden"
                        />
                        <button type="button" onClick={close} aria-label="Close search" className="text-fashion-black hover:text-fashion-moss">
                            <HiX className="h-6 w-6" />
                        </button>
                    </form>

                    {!q && (
                        <div className="mt-6 flex flex-wrap items-center gap-2">
                            <span className="mr-1 text-sm text-fashion-black/60">Popular:</span>
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => (s === 'Sale' ? showAll(s) : setQuery(s))}
                                    className="border border-fashion-black/20 px-3 py-1.5 text-xs font-medium text-fashion-black transition-colors hover:border-fashion-black"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {q && results.length === 0 && (
                        <p className="mt-8 text-sm text-fashion-black/70">
                            No results for <span className="font-medium text-fashion-black">"{q}"</span>. Try another word, like a colour or category.
                        </p>
                    )}

                    {results.length > 0 && (
                        <>
                            <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                                {results.slice(0, MAX_RESULTS).map((p) => (
                                    <li key={p._id}>
                                        <Link to={`/product/${p.slug}`} onClick={close} className="group flex items-center gap-4">
                                            <span className="h-20 w-16 shrink-0 overflow-hidden bg-fashion-gray">
                                                <img
                                                    src={cldUrl(p.images[0].publicId, { width: 160 })}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block truncate text-sm text-fashion-black group-hover:underline underline-offset-4">
                                                    {p.name}
                                                </span>
                                                <span className="block text-xs text-fashion-black/50">{p.colors.join(', ')}</span>
                                                <span className={`block text-sm tabular-nums ${p.discountPrice != null ? 'text-fashion-terracotta' : 'text-fashion-black'}`}>
                                                    {formatPrice(finalPrice(p))}
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                onClick={() => showAll(q)}
                                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-fashion-moss hover:text-fashion-black"
                            >
                                See all {results.length} {results.length === 1 ? 'result' : 'results'}
                                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;
