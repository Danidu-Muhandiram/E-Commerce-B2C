import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import look1 from '../../assets/new5.webp';
import look2 from '../../assets/new1.webp';
import look3 from '../../assets/new2.webp';
import look4 from '../../assets/new3.webp';

// Each look is a real outfit with shoppable pieces — swap for API data later.
const looks = [
  {
    name: 'Straw & citrus',
    image: look1,
    alt: 'Model in a straw boater, printed cami and orange midi skirt, holding a woven tote',
    focus: '46% 30%',
    items: [
      { name: 'Straw boater hat', price: 2190 },
      { name: 'Pineapple print cami', price: 3490 },
      { name: 'Tiered cotton midi skirt', price: 4990 },
      { name: 'Woven basket tote', price: 3890 },
    ],
  },
  {
    name: 'Off-duty linen',
    image: look2,
    alt: 'Model in a panama hat, unstructured beige blazer and band-collar shirt',
    focus: '50% 25%',
    items: [
      { name: 'Unstructured linen blazer', price: 12490 },
      { name: 'Band-collar striped shirt', price: 4790 },
      { name: 'Panama hat', price: 2990 },
    ],
  },
  {
    name: 'Print, loud',
    image: look3,
    alt: 'Model in yellow cat-eye sunglasses and a botanical print shirt',
    focus: '50% 30%',
    items: [
      { name: 'Botanical print shirt', price: 5290 },
      { name: 'Cat-eye sunglasses', price: 2490 },
      { name: 'High-rise black shorts', price: 3290 },
    ],
  },
  {
    name: 'City neutral',
    image: look4,
    alt: 'Model in a black wide-brim hat, taupe leather trench and white saddle bag',
    focus: '52% 25%',
    items: [
      { name: 'Vegan leather trench', price: 14900 },
      { name: 'Wool wide-brim hat', price: 3990 },
      { name: 'Croc-effect saddle bag', price: 6490 },
    ],
  },
];

const formatPrice = (n) => `Rs ${n.toLocaleString('en-US')}`;
const pad = (n) => String(n).padStart(2, '0');

const Hero = () => {
  const [active, setActive] = useState(0);
  const look = looks[active];
  const total = look.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="bg-fashion-eggshell border-t border-fashion-moss/10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-16 pt-8 pb-12 lg:py-10 grid gap-8 lg:gap-x-16 lg:gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[1fr_auto] lg:h-[calc(100svh-120px)] lg:min-h-[620px] lg:max-h-[860px]">

        {/* Intro */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-center">
          <p className="text-sm font-medium text-fashion-moss">
            Resort 2027 - in store and online now
          </p>
          <h1 className="mt-4 font-playfair text-[44px] leading-[0.98] sm:text-6xl xl:text-[84px] tracking-tight text-fashion-black">
            Summer,
            <br />
            <em className="italic font-normal text-fashion-moss">unhurried.</em>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fashion-black/70">
            Linen, straw and sun-faded colour. Sixty-four new pieces, cut loose
            for long days and island heat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/women"
              className="inline-flex items-center gap-2 bg-fashion-moss px-7 py-3.5 text-sm font-medium text-fashion-eggshell transition-colors hover:bg-fashion-black"
            >
              Shop women
            </Link>
            <Link
              to="/men"
              className="text-sm font-medium text-fashion-black underline decoration-fashion-black/30 underline-offset-[6px] transition-colors hover:decoration-fashion-black"
            >
              Shop men
            </Link>
          </div>
        </div>

        {/* Look strip — the active look opens up, the rest stay as colour bands */}
        <div
          className="flex gap-2 h-[62svh] min-h-[420px] max-h-[640px] lg:max-h-none lg:h-auto lg:min-h-0 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          role="group"
          aria-label="Resort 2027 looks"
        >
          {looks.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={`Look ${pad(i + 1)}: ${item.name}`}
                style={{ flexGrow: isActive ? 8 : 1 }}
                className={`group relative min-w-0 basis-0 overflow-hidden bg-fashion-gray transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <img
                  src={item.image}
                  alt={isActive ? item.alt : ''}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
                  style={{ objectPosition: item.focus }}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-reduce:transition-none ${isActive ? '' : 'group-hover:scale-105'}`}
                />

                {/* Look number, always visible */}
                <span className="absolute left-2 top-2 bg-fashion-eggshell px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-fashion-black">
                  {pad(i + 1)}
                </span>

                {/* Caption on the open look */}
                <span
                  className={`absolute bottom-3 left-3 bg-fashion-eggshell px-3 py-1.5 text-left text-sm text-fashion-black whitespace-nowrap transition-opacity duration-300 ${isActive ? 'opacity-100 delay-500' : 'opacity-0'}`}
                >
                  <span className="font-playfair italic">{item.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* What's in the open look */}
        <div className="lg:col-start-1 lg:row-start-2 border-t border-fashion-black/15 pt-5">
          <div className="flex items-baseline justify-between">
            <p className="font-playfair italic text-lg text-fashion-black">In this look</p>
            <span className="text-xs tabular-nums text-fashion-black/50">
              {pad(active + 1)} of {pad(looks.length)}
            </span>
          </div>

          <ul key={active} className="mt-2 animate-rise motion-reduce:animate-none">
            {look.items.map((item) => (
              <li key={item.name}>
                <Link
                  to="/shop"
                  className="group flex items-baseline gap-3 py-1.5 text-sm text-fashion-black"
                >
                  <span className="group-hover:underline underline-offset-4">{item.name}</span>
                  <span aria-hidden="true" className="flex-1 -translate-y-1 border-b border-dotted border-fashion-black/25" />
                  <span className="tabular-nums text-fashion-black/70">{formatPrice(item.price)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/shop"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fashion-moss hover:text-fashion-black transition-colors"
          >
            Shop the full look &middot; <span className="tabular-nums">{formatPrice(total)}</span>
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
