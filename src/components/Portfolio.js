import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { places } from "../data";
import { Link } from "react-router-dom";

import "./Portfolio.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    adaptiveHeight: true,
    fade: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <div className="container-portfolio">
      <Slider {...settings}>
        {places.map((place, id) => (
          <div key={id} className="box">
            <div className="box-internal">
              <Link className="title" to={place.url}>
                <h2>{place.title}</h2>
                <div className="box-img">
                  <img src={place.imgUrl} alt={place.title} />
                </div>
              </Link>
              <div className="box-text">
                <p className="text">{place.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
