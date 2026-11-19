import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { cldSrcSet, cldUrl } from '../../lib/cloudinary';
import { finalPrice, formatInstalment, formatPrice } from '../../lib/format';
import { useStore } from '../../context/store';

const SIZES = '(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw';

const ProductCard = ({ product }) => {
    const { isWishlisted, toggleWishlist } = useStore();
    const [first, second] = product.images;
    const saved = isWishlisted(product.slug);
    const onSale = product.discountPrice != null;

    return (
        <article className="group relative">
            <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-fashion-gray">
                    <img
                        src={cldUrl(first.publicId, { width: 600 })}
                        srcSet={cldSrcSet(first.publicId)}
                        sizes={SIZES}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    {second && (
                        <img
                            src={cldUrl(second.publicId, { width: 600 })}
                            srcSet={cldSrcSet(second.publicId)}
                            sizes={SIZES}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
                        />
                    )}

                    <div className="absolute left-2 top-2 flex gap-1">
                        {onSale && (
                            <span className="bg-fashion-terracotta px-2 py-0.5 text-[11px] font-medium text-fashion-eggshell">
                                Sale
                            </span>
                        )}
                        {product.isNew && (
                            <span className="bg-fashion-eggshell px-2 py-0.5 text-[11px] font-medium text-fashion-black">
                                New
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-1">
                    <h3 className="text-sm text-fashion-black group-hover:underline underline-offset-4">
                        {product.name}
                    </h3>
                    <p className="text-xs text-fashion-black/50">{product.colors.join(', ')}</p>
                    <p className="text-sm tabular-nums">
                        {onSale ? (
                            <>
                                <span className="text-fashion-terracotta">{formatPrice(product.discountPrice)}</span>{' '}
                                <s className="text-fashion-black/40">{formatPrice(product.price)}</s>
                            </>
                        ) : (
                            <span className="text-fashion-black">{formatPrice(product.price)}</span>
                        )}
                    </p>
                    <p className="text-xs tabular-nums text-fashion-black/50">
                        or 3 &times; {formatInstalment(finalPrice(product) / 3)} with KOKO
                    </p>
                </div>
            </Link>

            <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                aria-pressed={saved}
                aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
                className="absolute right-2 top-2 grid h-8 w-8 place-items-center bg-fashion-eggshell/90 text-fashion-black transition-colors hover:text-fashion-terracotta"
            >
                <FiHeart className={`h-4 w-4 ${saved ? 'fill-fashion-terracotta text-fashion-terracotta' : ''}`} />
            </button>
        </article>
    );
};

export default ProductCard;
