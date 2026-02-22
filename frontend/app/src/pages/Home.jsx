import React from 'react';
import Hero from '../components/hero/Hero';
import PopularCollections from '../components/collections/PopularCollections';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCollections />
        </div>
    );
};

export default Home;
