import React from 'react';
import Hero from '../components/hero/Hero';
import PopularCollections from '../components/collections/PopularCollections';
import NewArrivals from '../components/collections/NewArrivals';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCollections />
            <NewArrivals />
        </div>
    );
};

export default Home;
