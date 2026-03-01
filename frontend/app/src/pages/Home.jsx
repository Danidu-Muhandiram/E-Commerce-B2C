import React from 'react';
import Hero from '../components/hero/Hero';
import PopularCollections from '../components/collections/PopularCollections';
import NewArrivals from '../components/collections/NewArrivals';
import BannerSlider from '../components/collections/BannerSlider';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCollections />
            <NewArrivals />
            <BannerSlider />
        </div>
    );
};

export default Home;
