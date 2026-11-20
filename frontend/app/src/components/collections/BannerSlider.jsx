import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { editorialImg } from '../../lib/cloudinary';

// left/width match the empty colour panels in each image (in %)
const banners = [
    {
        image: 'veloura/banners/banner1',
        version: 1795156256,
        alt: 'Man in a white tee and sunglasses',
        cta: 'Shop new in',
        link: '/shop?show=new',
        blocks: [
            {
                left: 0,
                width: 62.3,
                headline: 'New season,\nnew energy',
                line: 'Sharp fits and clean designs built for everyday confidence and comfort.',
            },
        ],
    },
    {
        image: 'veloura/banners/banner2',
        version: 1795156335,
        alt: 'Two young men in blazers against a white wall',
        cta: 'Shop men',
        link: '/men',
        blocks: [{ left: 34.7, width: 29.6, headline: 'Born to stand out' }],
    },
    {
        image: 'veloura/banners/banner3',
        version: 1795156336,
        alt: 'Woman in a black open-back bodysuit',
        cta: 'Shop women',
        link: '/women',
        blocks: [
            { left: 0, width: 29.6, headline: 'Glow\nyour way' },
            { left: 74.9, width: 25.1, line: 'Trendy fits designed for bold, beautiful girls.', big: true },
        ],
    },
    {
        image: 'veloura/banners/banner4',
        version: 1795156260,
        alt: 'Woman in sunglasses and a man in a black vest',
        cta: 'Shop all',
        link: '/shop',
        shade: true,
        blocks: [{ left: 0, width: 100, headline: 'Own your style' }],
    },
];

const BannerSlider = () => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchX = useRef(null);

    const go = (i) => setActive((i + banners.length) % banners.length);

    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
        touchX.current = null;
    };

    return (
        <section className="bg-white px-4 md:px-10 lg:px-16 py-14 md:py-20">
            <div
                className="group relative mx-auto max-w-[1400px]"
                role="region"
                aria-roledescription="carousel"
                aria-label="Campaigns"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={onTouchEnd}
            >
                <div className="@container relative aspect-video overflow-hidden bg-fashion-gray">
                    {banners.map((banner, i) => (
                        <div
                            key={banner.image}
                            aria-hidden={i !== active}
                            inert={i !== active}
                            className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${i === active ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                {...editorialImg(banner.image, '(min-width: 1440px) 1400px, 100vw', banner.version)}
                                alt={banner.alt}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                            {banner.shade && <div className="absolute inset-0 bg-fashion-black/30" />}

                            {/* text sits on the colour panels, sized to the banner width */}
                            {banner.blocks.map((block) => (
                                <div
                                    key={block.left}
                                    style={{ left: `${block.left}%`, width: `${block.width}%` }}
                                    className="absolute inset-y-0 flex flex-col items-center justify-center px-[3cqw] text-center text-fashion-eggshell"
                                >
                                    {block.headline && (
                                        <h2 className="whitespace-pre-line font-playfair text-[max(20px,5.5cqw)] leading-[1.05] tracking-tight">
                                            {block.headline}
                                        </h2>
                                    )}
                                    {block.line && (
                                        <p
                                            className={`hidden md:block font-playfair italic ${block.big ? 'text-[3.6cqw] leading-[1.25]' : 'mt-[2cqw] max-w-[80%] text-[1.5cqw] leading-snug text-fashion-eggshell/85'}`}
                                        >
                                            {block.line}
                                        </p>
                                    )}
                                </div>
                            ))}
                            <Link
                                to={banner.link}
                                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 hidden sm:inline-flex items-center gap-2 bg-fashion-eggshell px-4 py-2.5 md:px-6 md:py-3 text-sm font-medium text-fashion-black transition-colors hover:bg-fashion-black hover:text-fashion-eggshell"
                            >
                                {banner.cta}
                                <FiArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ))}

                    {/* arrows */}
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 hidden sm:flex gap-2">
                        <button
                            type="button"
                            onClick={() => go(active - 1)}
                            aria-label="Previous banner"
                            className="grid h-10 w-10 place-items-center bg-fashion-eggshell/90 text-fashion-black transition-colors hover:bg-fashion-eggshell"
                        >
                            <FiArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(active + 1)}
                            aria-label="Next banner"
                            className="grid h-10 w-10 place-items-center bg-fashion-eggshell/90 text-fashion-black transition-colors hover:bg-fashion-eggshell"
                        >
                            <FiArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* on phones the button goes under the banner */}
                <Link
                    to={banners[active].link}
                    className="mt-4 flex items-center justify-center gap-2 bg-fashion-black py-3 text-sm font-medium text-fashion-eggshell sm:hidden"
                >
                    {banners[active].cta}
                    <FiArrowRight className="h-4 w-4" />
                </Link>

                {/* progress bars, the active one moves to the next banner when it fills */}
                <div className="mt-4 flex gap-2">
                    {banners.map((banner, i) => (
                        <button
                            key={banner.image}
                            type="button"
                            onClick={() => go(i)}
                            aria-label={`Show banner ${i + 1}`}
                            aria-current={i === active}
                            className="flex-1 py-2"
                        >
                            <span className="block h-0.5 w-full overflow-hidden bg-fashion-black/15">
                                {i === active && (
                                    <span
                                        key={active}
                                        onAnimationEnd={() => go(active + 1)}
                                        style={{ animationPlayState: paused ? 'paused' : 'running' }}
                                        className="block h-full bg-fashion-black animate-progress motion-reduce:animate-none motion-reduce:w-full"
                                    />
                                )}
                                {i < active && <span className="block h-full w-full bg-fashion-black/40" />}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerSlider;
