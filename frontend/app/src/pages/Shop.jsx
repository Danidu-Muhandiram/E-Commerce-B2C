import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import products, { ACCESSORY_CATEGORIES } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { finalPrice } from '../lib/format';
import { matchesSearch } from '../lib/search';
import { HiOutlineSearch } from 'react-icons/hi';

const GENDERS = [
    { value: '', label: 'All' },
    { value: 'women', label: 'Women' },
    { value: 'men', label: 'Men' },
    { value: 'kids', label: 'Kids' },
];

const SORTS = {
    featured: { label: 'Featured', fn: () => 0 },
    newest: { label: 'Newest', fn: (a, b) => Number(b.isNew) - Number(a.isNew) },
    'price-asc': { label: 'Price: low to high', fn: (a, b) => finalPrice(a) - finalPrice(b) },
    'price-desc': { label: 'Price: high to low', fn: (a, b) => finalPrice(b) - finalPrice(a) },
};

// Curated subsets used by the home rails' "View all" links and /trending.
const SHOWS = {
    new: { title: 'New arrivals', test: (p) => p.isNew },
    trending: { title: 'Trending', test: (p) => p.isTrending },
    sale: { title: 'Sale', test: (p) => p.discountPrice != null },
    accessories: { title: 'Accessories', test: (p) => ACCESSORY_CATEGORIES.includes(p.category) },
};

const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const sizeRank = (s) => (SIZE_ORDER.includes(s) ? SIZE_ORDER.indexOf(s) : SIZE_ORDER.length);

const titleCase = (s) => s.replace(/(^|-)(\w)/g, (_, sep, c) => (sep ? ' ' : '') + c.toUpperCase());

const Chip = ({ active, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`border px-3 py-1.5 text-xs font-medium transition-colors ${active ? 'border-fashion-black bg-fashion-black text-fashion-eggshell' : 'border-fashion-black/20 text-fashion-black hover:border-fashion-black'}`}
    >
        {children}
    </button>
);

// `gender` / `show` are set by routes like /men and /trending; /shop reads them
// from the query string instead.
const Shop = ({ gender: fixedGender, show: fixedShow }) => {
    const [params, setParams] = useSearchParams();
    const gender = fixedGender ?? params.get('gender') ?? '';
    const showParam = fixedShow ?? params.get('show');
    const show = SHOWS[showParam] ? showParam : '';
    const category = params.get('category') ?? '';
    const size = params.get('size') ?? '';
    const q = params.get('q') ?? '';
    const sort = SORTS[params.get('sort')] ? params.get('sort') : 'featured';

    const setParam = (key, value) => {
        const next = new URLSearchParams(params);
        if (value) next.set(key, value);
        else next.delete(key);
        setParams(next, { replace: true });
    };

    const inGender = useMemo(
        () =>
            products
                .filter((p) => !gender || p.gender === gender || p.gender === 'unisex')
                .filter((p) => !show || SHOWS[show].test(p))
                .filter((p) => matchesSearch(p, q)),
        [gender, show, q],
    );
    const categories = useMemo(() => [...new Set(inGender.map((p) => p.category))].sort(), [inGender]);
    const sizes = useMemo(
        () => [...new Set(inGender.flatMap((p) => p.sizes))].sort((a, b) => sizeRank(a) - sizeRank(b)),
        [inGender],
    );

    const results = useMemo(
        () =>
            inGender
                .filter((p) => !category || p.category === category)
                .filter((p) => !size || p.sizes.includes(size))
                .sort(SORTS[sort].fn),
        [inGender, category, size, sort],
    );

    const hasFilters = Boolean(q || category || size || (!fixedGender && gender) || (!fixedShow && show));
    const heading = q ? `Results for "${q}"` : show ? SHOWS[show].title : fixedGender ? titleCase(fixedGender) : 'Shop all';

    return (
        <section className="bg-white px-4 md:px-10 lg:px-16 pt-10 pb-20">
            <div className="mx-auto max-w-[1400px]">
                <nav aria-label="Breadcrumb" className="text-xs text-fashion-black/50">
                    <Link to="/" className="hover:text-fashion-black">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-fashion-black">{heading}</span>
                </nav>

                <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                    <h1 className="font-playfair text-4xl md:text-5xl tracking-tight text-fashion-black">{heading}</h1>
                    <p className="text-sm tabular-nums text-fashion-black/50">
                        {results.length} {results.length === 1 ? 'piece' : 'pieces'}
                    </p>
                </div>

                {/* Filters */}
                <div className="mt-8 flex flex-col gap-4 border-y border-fashion-black/15 py-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <label className="flex w-full items-center gap-2 border-b border-fashion-black/20 pb-1.5 focus-within:border-fashion-black sm:w-56">
                            <HiOutlineSearch className="h-4 w-4 shrink-0 text-fashion-black/50" />
                            <input
                                type="search"
                                value={q}
                                onChange={(e) => setParam('q', e.target.value)}
                                placeholder="Search"
                                aria-label="Search products"
                                className="min-w-0 flex-1 bg-transparent text-sm text-fashion-black outline-none placeholder:text-fashion-black/40"
                            />
                        </label>

                        {!fixedGender && (
                            <div className="flex flex-wrap gap-2" role="group" aria-label="Gender">
                                {GENDERS.map((g) => (
                                    <Chip key={g.label} active={gender === g.value} onClick={() => setParam('gender', g.value)}>
                                        {g.label}
                                    </Chip>
                                ))}
                            </div>
                        )}

                        <label className="flex items-center gap-2 text-xs text-fashion-black/60">
                            Category
                            <select
                                value={category}
                                onChange={(e) => setParam('category', e.target.value)}
                                className="border border-fashion-black/20 bg-transparent px-2 py-1.5 text-xs font-medium text-fashion-black"
                            >
                                <option value="">All</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>{titleCase(c)}</option>
                                ))}
                            </select>
                        </label>

                        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Size">
                            <span className="text-xs text-fashion-black/60">Size</span>
                            {sizes.map((s) => (
                                <Chip key={s} active={size === s} onClick={() => setParam('size', size === s ? '' : s)}>
                                    {s}
                                </Chip>
                            ))}
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                onClick={() => setParams({}, { replace: true })}
                                className="text-xs text-fashion-black/60 underline underline-offset-4 hover:text-fashion-black"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>

                    <label className="flex items-center gap-2 text-xs text-fashion-black/60">
                        Sort
                        <select
                            value={sort}
                            onChange={(e) => setParam('sort', e.target.value === 'featured' ? '' : e.target.value)}
                            className="border border-fashion-black/20 bg-transparent px-2 py-1.5 text-xs font-medium text-fashion-black"
                        >
                            {Object.entries(SORTS).map(([value, { label }]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </label>
                </div>

                {results.length > 0 ? (
                    <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                        {results.map((p) => (
                            <ProductCard key={p._id} product={p} />
                        ))}
                    </div>
                ) : (
                    <div className="py-24 text-center">
                        <p className="font-playfair text-2xl italic text-fashion-black">Nothing here yet.</p>
                        <p className="mt-2 text-sm text-fashion-black/60">Try a different size or category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shop;
