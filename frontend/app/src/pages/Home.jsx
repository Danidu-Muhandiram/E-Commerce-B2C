import React from 'react';
import Hero from '../components/hero/Hero';
import PopularCollections from '../components/collections/PopularCollections';
import NewArrivals from '../components/collections/NewArrivals';
import SpecialOffers from '../components/collections/SpecialOffers';
import BannerSlider from '../components/collections/BannerSlider';
import Accessories from '../components/collections/Accessories';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCollections />
            <NewArrivals />
            <SpecialOffers />
            <BannerSlider />
            <Accessories />
        </div>
    );
};

export default Home;
