import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useStore } from '../../context/store';
import { cldUrl } from '../../lib/cloudinary';
import { finalPrice, formatPrice } from '../../lib/format';

const FREE_SHIPPING_AT = 15000;

const CartDrawer = () => {
    const { cart, cartCount, subtotal, cartOpen, closeCart, updateQty, removeFromCart } = useStore();

    // Close on Escape and stop the page behind from scrolling while open.
    useEffect(() => {
        if (!cartOpen) return;
        const onKey = (e) => e.key === 'Escape' && closeCart();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [cartOpen, closeCart]);

    const remaining = FREE_SHIPPING_AT - subtotal;

    return (
        <div className={`fixed inset-0 z-[60] ${cartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!cartOpen}>
            <div
                onClick={closeCart}
                className={`absolute inset-0 bg-fashion-black/40 transition-opacity duration-300 ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
            />

            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Shopping bag"
                inert={!cartOpen}
                className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-fashion-eggshell shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <header className="flex items-center justify-between border-b border-fashion-black/15 px-5 py-4">
                    <h2 className="font-playfair text-2xl text-fashion-black">
                        Your bag <span className="font-inter text-sm text-fashion-black/50 tabular-nums">({cartCount})</span>
                    </h2>
                    <button type="button" onClick={closeCart} aria-label="Close bag" className="text-fashion-black hover:text-fashion-moss">
                        <HiX className="h-6 w-6" />
                    </button>
                </header>

                {cart.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                        <p className="font-playfair text-xl italic text-fashion-black">Your bag is empty.</p>
                        <Link
                            to="/shop"
                            onClick={closeCart}
                            className="bg-fashion-moss px-7 py-3 text-sm font-medium text-fashion-eggshell transition-colors hover:bg-fashion-black"
                        >
                            Start shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        <p className="border-b border-fashion-black/15 px-5 py-3 text-xs text-fashion-black/70">
                            {remaining > 0
                                ? <>Add <span className="tabular-nums font-medium text-fashion-black">{formatPrice(remaining)}</span> more for free shipping.</>
                                : 'Your order ships free.'}
                        </p>

                        <ul className="flex-1 divide-y divide-fashion-black/10 overflow-y-auto px-5">
                            {cart.map(({ product, size, qty }) => (
                                <li key={`${product.slug}-${size}`} className="flex gap-4 py-4">
                                    <Link to={`/product/${product.slug}`} onClick={closeCart} className="h-28 w-[90px] shrink-0 overflow-hidden bg-fashion-gray">
                                        <img
                                            src={cldUrl(product.images[0].publicId, { width: 200 })}
                                            alt={product.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </Link>
                                    <div className="flex flex-1 flex-col">
                                        <div className="flex justify-between gap-3">
                                            <Link to={`/product/${product.slug}`} onClick={closeCart} className="text-sm text-fashion-black hover:underline underline-offset-4">
                                                {product.name}
                                            </Link>
                                            <span className="text-sm tabular-nums text-fashion-black">
                                                {formatPrice(finalPrice(product) * qty)}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-xs text-fashion-black/50">
                                            {product.colors[0]} &middot; Size {size}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center border border-fashion-black/20">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQty(product.slug, size, qty - 1)}
                                                    aria-label="Decrease quantity"
                                                    className="grid h-8 w-8 place-items-center hover:bg-fashion-black/5"
                                                >
                                                    <FiMinus className="h-3 w-3" />
                                                </button>
                                                <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQty(product.slug, size, qty + 1)}
                                                    disabled={qty >= product.countInStock}
                                                    aria-label="Increase quantity"
                                                    className="grid h-8 w-8 place-items-center hover:bg-fashion-black/5 disabled:opacity-30"
                                                >
                                                    <FiPlus className="h-3 w-3" />
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(product.slug, size)}
                                                className="text-xs text-fashion-black/50 underline underline-offset-4 hover:text-fashion-terracotta"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <footer className="border-t border-fashion-black/15 px-5 py-5">
                            <div className="flex items-baseline justify-between">
                                <span className="text-sm text-fashion-black">Subtotal</span>
                                <span className="text-lg tabular-nums text-fashion-black">{formatPrice(subtotal)}</span>
                            </div>
                            <p className="mt-1 text-xs text-fashion-black/50">Shipping calculated at checkout.</p>
                            <button
                                type="button"
                                disabled
                                title="Checkout is coming soon"
                                className="mt-4 w-full bg-fashion-moss py-3.5 text-sm font-medium text-fashion-eggshell disabled:opacity-60"
                            >
                                Checkout (coming soon)
                            </button>
                        </footer>
                    </>
                )}
            </aside>
        </div>
    );
};

export default CartDrawer;
