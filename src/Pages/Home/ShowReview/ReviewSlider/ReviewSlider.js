import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import "./ReviewSlider.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import SliderCard from "./SliderCard/SliderCard";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://lit-refuge-91293.herokuapp.com/showreviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <GrPrevious></GrPrevious>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <GrNext></GrNext>
    </button>
  );
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft></SlickArrowLeft>,
    nextArrow: <SlickArrowRight></SlickArrowRight>,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1252,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-5 container-fluid">
      <h2> Responsive </h2>
      <div className="container-fluid">
        <Slider {...settings}>
          {
          
          reviews.map((review) => (
            <SliderCard
                key={review._id}
                review={review}
            ></SliderCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ReviewSlider;

// https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/
