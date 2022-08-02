import React from "react";
import "./style.css";
import image45 from "./assets/image45.png";
import image2 from "./assets/image2.png";
import zatecky_gus from "./assets/zatecky_gus_logo-850x6391.png";
import pngwing1 from "./assets/pngwing1.png";
import channels4 from "./assets/channels4_profile1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section id="brands">
      <h1>БРЕНДЫ И ПОСТАВЩИКИ</h1>
      <Slider {...settings}>
        <div className="brand_logo">
          <div>
            <img src={image45} alt="" />
          </div>
        </div>
        <div className="brand_logo">
          <div>
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="brand_logo">
          <div>
            <img src={zatecky_gus} alt="" />
          </div>
        </div>
        <div className="brand_logo">
          <div>
            <img src={pngwing1} alt="" />
          </div>
        </div>
        <div className="brand_logo">
          <div>
            <img src={channels4} alt="" />
          </div>
        </div>
      </Slider>
    </section>
  );
};
