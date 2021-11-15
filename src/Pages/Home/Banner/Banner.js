import React from "react";
import { NavLink } from "react-router-dom";
import banner1 from "../../../images/carousel/1.jpg";
import banner2 from "../../../images/carousel/2.jpg";
import banner3 from "../../../images/carousel/3.jpg";
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide height-50" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carosal-img"
              src={banner1}
              alt="First slide"
            />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>TECHNOLOGY</h1>
                <p>
                We've renewed our technology website. You can find contents more easily.
                </p>
                <p>
                  <NavLink to="/register" className="btn btn-lg btn-primary">
                    Sign up today
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img
              className="d-block w-100 carosal-img"
              src={banner2}
              alt="First slide"
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>BEYOND BASIC.</h1>
                <p>
                With groundbreaking performance in both still and movie recording, the α7 IV is the ideal hybrid, providing breathtaking imagery along with on-the-spot delivery and distribution. The α7 IV is a camera designed to bring to life the artistic visions of today's creators.
                </p>
                <p>
                  <NavLink to="/explore" className="btn btn-lg btn-primary" >
                    Explore More
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img
              className="d-block w-100 carosal-img"
              src={banner3}
              alt="First slide"
            />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>IMAGING EDGE MOBILE</h1>
                <p>
                With this versatile mobile application1, you can auto-transfer all still images while shooting by ‘Auto background transfer to Smartphone’ function2 via Wi-Fi® and share through SNS, easily and immediately. You can also send 4K movie from camera to mobile3, check camera live-view remotely on mobile, and add location data to image files.
                </p>
                <p>
                  <NavLink to="/explore" className="btn btn-lg btn-primary">
                    Browse gallery
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
