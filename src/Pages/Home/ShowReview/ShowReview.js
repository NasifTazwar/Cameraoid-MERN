import React, { Component } from "react";
import Slider from "react-slick";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

const ShowReview = () => {
    
    return (
        <div className="container-fluid review-container">
            <h1 className="pt-5" style={{fontWeight: 700}}>Customers Reviews</h1>
            <h3 className="pt-1" style={{fontWeight: 700}}>What Our Customers Say About Us</h3>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default ShowReview;