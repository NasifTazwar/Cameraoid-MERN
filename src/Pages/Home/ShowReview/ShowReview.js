import React, { Component } from "react";
import Slider from "react-slick";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

const ShowReview = () => {
    
    return (
        <div className="container-fluid review-container">
            <h2>Reviews</h2>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default ShowReview;