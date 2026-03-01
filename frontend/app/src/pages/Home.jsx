import Hero from '../components/hero/Hero';
import ShopByCategory from '../components/collections/ShopByCategory';
import PopularCollections from '../components/collections/PopularCollections';
import NewArrivals from '../components/collections/NewArrivals';
import SpecialOffers from '../components/collections/SpecialOffers';
import BannerSlider from '../components/collections/BannerSlider';
import Accessories from '../components/collections/Accessories';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <PopularCollections />
            <NewArrivals />
            <SpecialOffers />
            <BannerSlider />
            <Accessories />
            <ShopByCategory />
        </div>
    );
};

export default Home;
