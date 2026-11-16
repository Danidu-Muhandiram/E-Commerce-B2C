import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiHeart, FiStar } from 'react-icons/fi';
import { getProductBySlug } from '../data/products';
import { useStore } from '../context/store';
import { cldSrcSet, cldUrl } from '../lib/cloudinary';
import { formatPrice } from '../lib/format';
import NotFound from './NotFound';

const Product = () => {
    const { slug } = useParams();
    const product = getProductBySlug(slug);
    if (!product) return <NotFound />;
    // Keyed by slug so size and image selection reset when navigating between products.
    return <ProductView key={product.slug} product={product} />;
};

const ProductView = ({ product }) => {
    const { addToCart, isWishlisted, toggleWishlist } = useStore();
    const [activeImage, setActiveImage] = useState(0);
    const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : '');
    const [sizeError, setSizeError] = useState(false);

    const onSale = product.discountPrice != null;
    const saved = isWishlisted(product.slug);
    const inStock = product.countInStock > 0;

    const handleAdd = () => {
        if (!size) {
            setSizeError(true);
            return;
        }
        addToCart(product.slug, size);
    };

    return (
        <section className="bg-white px-4 md:px-10 lg:px-16 pt-8 pb-20">
            <div className="mx-auto max-w-[1400px]">
                <nav aria-label="Breadcrumb" className="text-xs text-fashion-black/50">
                    <Link to="/" className="hover:text-fashion-black">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/${product.gender}`} className="capitalize hover:text-fashion-black">{product.gender}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-fashion-black">{product.name}</span>
                </nav>

                <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
                    {/* Gallery: thumbnails beside the main image on desktop, below it on mobile */}
                    <div className="flex flex-col-reverse gap-3 md:flex-row">
                        <div className="flex gap-2 md:flex-col" role="group" aria-label="Product images">
                            {product.images.map((img, i) => (
                                <button
                                    key={img.publicId}
                                    type="button"
                                    onClick={() => setActiveImage(i)}
                                    aria-label={`View image ${i + 1}`}
                                    aria-pressed={i === activeImage}
                                    className={`aspect-[4/5] w-16 overflow-hidden bg-fashion-gray transition-opacity md:w-20 ${i === activeImage ? 'ring-1 ring-fashion-black ring-offset-2' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={cldUrl(img.publicId, { width: 160 })} alt="" className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                        <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-fashion-gray">
                            {product.images.map((img, i) => (
                                <img
                                    key={img.publicId}
                                    src={cldUrl(img.publicId, { width: 1000 })}
                                    srcSet={cldSrcSet(img.publicId)}
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    alt={i === activeImage ? `${product.name}, image ${i + 1} of ${product.images.length}` : ''}
                                    fetchPriority={i === 0 ? 'high' : 'auto'}
                                    loading={i === 0 ? 'eager' : 'lazy'}
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${i === activeImage ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        {product.isNew && <p className="text-sm font-medium text-fashion-moss">New in</p>}
                        <h1 className="mt-1 font-playfair text-3xl md:text-4xl tracking-tight text-fashion-black">
                            {product.name}
                        </h1>

                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <p className="tabular-nums text-lg">
                                {onSale ? (
                                    <>
                                        <span className="text-fashion-terracotta">{formatPrice(product.discountPrice)}</span>{' '}
                                        <s className="text-base text-fashion-black/40">{formatPrice(product.price)}</s>
                                    </>
                                ) : (
                                    <span className="text-fashion-black">{formatPrice(product.price)}</span>
                                )}
                            </p>
                            {product.numReviews > 0 && (
                                <span className="flex items-center gap-1 text-fashion-black/60">
                                    <FiStar className="h-3.5 w-3.5 fill-fashion-black text-fashion-black" />
                                    <span className="tabular-nums">{product.rating.toFixed(1)}</span>
                                    <span className="tabular-nums">({product.numReviews})</span>
                                </span>
                            )}
                        </div>

                        <p className="mt-6 text-sm text-fashion-black/70">
                            Colour: <span className="text-fashion-black">{product.colors.join(', ')}</span>
                        </p>

                        <fieldset className="mt-6">
                            <legend className="flex w-full justify-between text-sm text-fashion-black">
                                <span>Size</span>
                                {sizeError && <span className="text-fashion-terracotta" role="alert">Please choose a size</span>}
                            </legend>
                            <div className="mt-3 grid grid-cols-5 gap-2">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => {
                                            setSize(s);
                                            setSizeError(false);
                                        }}
                                        aria-pressed={size === s}
                                        className={`border py-3 text-sm transition-colors ${size === s ? 'border-fashion-black bg-fashion-black text-fashion-eggshell' : 'border-fashion-black/20 text-fashion-black hover:border-fashion-black'}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </fieldset>

                        <div className="mt-6 flex gap-2">
                            <button
                                type="button"
                                onClick={handleAdd}
                                disabled={!inStock}
                                className="flex-1 bg-fashion-moss py-4 text-sm font-medium text-fashion-eggshell transition-colors hover:bg-fashion-black disabled:opacity-50"
                            >
                                {inStock ? 'Add to bag' : 'Sold out'}
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleWishlist(product.slug)}
                                aria-pressed={saved}
                                aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
                                className="grid w-14 place-items-center border border-fashion-black/20 text-fashion-black transition-colors hover:border-fashion-black"
                            >
                                <FiHeart className={`h-5 w-5 ${saved ? 'fill-fashion-terracotta text-fashion-terracotta' : ''}`} />
                            </button>
                        </div>

                        {inStock && product.countInStock <= 5 && (
                            <p className="mt-3 text-xs text-fashion-terracotta">Only {product.countInStock} left</p>
                        )}

                        <div className="mt-10 border-t border-fashion-black/15 pt-6">
                            <h2 className="font-playfair text-lg italic text-fashion-black">Details</h2>
                            <p className="mt-2 text-sm leading-relaxed text-fashion-black/70">{product.description}</p>
                        </div>
                        <div className="mt-6 border-t border-fashion-black/15 pt-6">
                            <h2 className="font-playfair text-lg italic text-fashion-black">Delivery &amp; returns</h2>
                            <p className="mt-2 text-sm leading-relaxed text-fashion-black/70">
                                Island-wide delivery in 2–4 working days. Free shipping on orders over Rs 15,000.
                                Free returns within 14 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
