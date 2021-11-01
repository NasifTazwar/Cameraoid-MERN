import React from "react";
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
                <h1>The New Frontier</h1>
                <p>
                Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
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
                <h1>Spirit of Exploration</h1>
                <p>
                The spirit of exploration is what draws us to visit places seldom seen, off the beaten trail—even off the map! That means visiting new places as often as possible. It means travelling with experienced experts, and local cultural ambassadors.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
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
                <h1>The Mountaintops</h1>
                <p>
                A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres above the surrounding land.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
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
