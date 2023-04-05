import React from 'react';
import BannerPage from './BannerPage';
import BannerPage2 from './BannerPage2';
import BestSellingBooks from './BestSellingBooks';

const HomePage = () => {
    return (
        <div>
            <BannerPage/>
            <BannerPage2/>
            <BestSellingBooks/>
        </div>
    );
};

export default HomePage;