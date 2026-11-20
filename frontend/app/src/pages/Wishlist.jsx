import { Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { useStore } from '../context/store';

const Wishlist = () => {
    const { wishlist } = useStore();
    // newest saves first
    const saved = [...wishlist].reverse().map(getProductBySlug).filter(Boolean);

    return (
        <section className="bg-white px-4 md:px-10 lg:px-16 pt-10 pb-20">
            <div className="mx-auto max-w-[1400px]">
                <nav aria-label="Breadcrumb" className="text-xs text-fashion-black/50">
                    <Link to="/" className="hover:text-fashion-black">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-fashion-black">Wishlist</span>
                </nav>

                <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-b border-fashion-black/15 pb-6">
                    <h1 className="font-playfair text-4xl md:text-5xl tracking-tight text-fashion-black">Wishlist</h1>
                    {saved.length > 0 && (
                        <p className="text-sm tabular-nums text-fashion-black/50">
                            {saved.length} saved {saved.length === 1 ? 'piece' : 'pieces'}
                        </p>
                    )}
                </div>

                {saved.length > 0 ? (
                    <>
                        <p className="mt-6 text-sm text-fashion-black/60">
                            Tap the heart to remove a piece. Pick a size on the product page to add it to your bag.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                            {saved.map((p) => (
                                <ProductCard key={p._id} product={p} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="py-24 text-center">
                        <p className="font-playfair text-2xl italic text-fashion-black">Nothing saved yet.</p>
                        <p className="mt-2 text-sm text-fashion-black/60">
                            Tap the heart on any piece to keep it here for later.
                        </p>
                        <Link
                            to="/shop"
                            className="mt-8 inline-flex bg-fashion-moss px-7 py-3.5 text-sm font-medium text-fashion-eggshell transition-colors hover:bg-fashion-black"
                        >
                            Start shopping
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Wishlist;
