import React from 'react';
import Banner from './Banner/Banner';
import LearnMore from './LearnMore/LearnMore';
import Products from './Products/Products';
import ShowReview from './ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <LearnMore></LearnMore>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;