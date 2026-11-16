import { useCallback, useEffect, useMemo, useState } from 'react';
import { StoreContext } from './store';
import products from '../data/products';
import { finalPrice } from '../lib/format';

// Cart and wishlist live in localStorage until there is a backend.
const CART_KEY = 'veloura.cart';
const WISHLIST_KEY = 'veloura.wishlist';

const load = (key) => {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return Array.isArray(value) ? value : [];
    } catch {
        return [];
    }
};

const save = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // storage full or blocked; state still works for this session
    }
};

const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

const StoreProvider = ({ children }) => {
    // Cart lines: { slug, size, qty }. Product details are looked up, not copied,
    // so price changes in the catalogue show up in the cart.
    const [lines, setLines] = useState(() => load(CART_KEY).filter((l) => bySlug[l.slug]));
    const [wishlist, setWishlist] = useState(() => load(WISHLIST_KEY).filter((s) => bySlug[s]));
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => save(CART_KEY, lines), [lines]);
    useEffect(() => save(WISHLIST_KEY, wishlist), [wishlist]);

    const addToCart = useCallback((slug, size, qty = 1) => {
        setLines((prev) => {
            const max = bySlug[slug].countInStock;
            const existing = prev.find((l) => l.slug === slug && l.size === size);
            if (existing) {
                return prev.map((l) => (l === existing ? { ...l, qty: Math.min(l.qty + qty, max) } : l));
            }
            return [...prev, { slug, size, qty: Math.min(qty, max) }];
        });
        setCartOpen(true);
    }, []);

    const updateQty = useCallback((slug, size, qty) => {
        setLines((prev) =>
            qty < 1
                ? prev.filter((l) => !(l.slug === slug && l.size === size))
                : prev.map((l) =>
                      l.slug === slug && l.size === size
                          ? { ...l, qty: Math.min(qty, bySlug[slug].countInStock) }
                          : l,
                  ),
        );
    }, []);

    const removeFromCart = useCallback((slug, size) => updateQty(slug, size, 0), [updateQty]);

    const toggleWishlist = useCallback((slug) => {
        setWishlist((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
    }, []);

    const value = useMemo(() => {
        const cart = lines.map((l) => ({ ...l, product: bySlug[l.slug] }));
        return {
            cart,
            cartCount: cart.reduce((n, l) => n + l.qty, 0),
            subtotal: cart.reduce((sum, l) => sum + finalPrice(l.product) * l.qty, 0),
            addToCart,
            updateQty,
            removeFromCart,
            cartOpen,
            openCart: () => setCartOpen(true),
            closeCart: () => setCartOpen(false),
            wishlist,
            isWishlisted: (slug) => wishlist.includes(slug),
            toggleWishlist,
        };
    }, [lines, wishlist, cartOpen, addToCart, updateQty, removeFromCart, toggleWishlist]);

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
