import Hero from '../components/hero/Hero';
import ShopByCategory from '../components/collections/ShopByCategory';
import PopularCollections from '../components/collections/PopularCollections';
import BannerSlider from '../components/collections/BannerSlider';
import OurBrands from '../components/collections/OurBrands';
import ProductRail from '../components/products/ProductRail';
import products from '../data/products';

const ACCESSORY_CATEGORIES = ['bags', 'hats', 'sunglasses', 'jewellery', 'belts'];

// Each rail is a filtered view of the catalogue, so new products appear on the
// home page as soon as they are added to data/products.js.
const trending = products.filter((p) => p.isTrending);
const newArrivals = products.filter((p) => p.isNew);
const onSale = products.filter((p) => p.discountPrice != null);
const accessories = products.filter((p) => ACCESSORY_CATEGORIES.includes(p.category));

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <PopularCollections />
            <ProductRail eyebrow="Current favourites" title="Trending" link="/trending" products={trending} />
            <ProductRail eyebrow="Just landed" title="New arrivals" link="/shop?show=new" products={newArrivals} tone="eggshell" />
            <ProductRail eyebrow="Limited time" title="Special offers" link="/shop?show=sale" linkLabel="View all sale" products={onSale} />
            <BannerSlider />
            <ProductRail eyebrow="Finishing touches" title="Accessories" link="/accessories" products={accessories} />
            <ShopByCategory />
            <OurBrands />
        </div>
    );
};

export default Home;
