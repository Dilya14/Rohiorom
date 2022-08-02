import React from "react";
import "./style.css";
import image46 from "./assets/image46.png";
import image20 from "./assets/image20.png";
import pngwing3 from "./assets/pngwing3.png";
import kisspng from "./assets/kisspng-bi1-supermarket-logo-hypermarket-bi1-pierre-de-bresse-supermarkets-pierre-de-bresse-5befe221c1b469 1.png";
import image16 from "./assets/image16.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Clients = () => {
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
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="clients">
      <h1>НАШИ КЛИЕНТЫ</h1>
      <Slider {...settings}>
        <div className="clients_logo">
          <div>
            <img src={image46} alt="" />
          </div>
        </div>
        <div className="clients_logo">
          <div>
            <img src={image20} alt="" />
          </div>
        </div>
        <div className="clients_logo">
          <div>
            <img src={pngwing3} alt="" />
          </div>
        </div>
        <div className="clients_logo">
          <div>
            <img src={kisspng} alt="" />
          </div>
        </div>
        <div className="clients_logo">
          <div>
            <img src={image16} alt="" />
          </div>
        </div>
      </Slider>
    </section>
  );
};
