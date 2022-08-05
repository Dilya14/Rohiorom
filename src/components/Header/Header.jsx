import React from "react";
import "./style.css";
import Ultra from "./assets/Ultra425x200-01.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Header = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="header">
      <Slider {...settings}>
        <div className="slider">
          <div className="slider_item">
            <div className="slider_img">
              <img src={Ultra} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};
