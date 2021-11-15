import React, { Component } from "react";
import Slider from "react-slick";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

const ShowReview = () => {
    
    return (
        <div className="container-fluid review-container">
            <h1 className="pt-5" style={{fontWeight: 700}}>Customers Reviews</h1>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default ShowReview;