import React from "react";
import "./style.css";
import image45 from "./assets/image45.png";
import image2 from "./assets/image2.png";
import zatecky_gus from "./assets/zatecky_gus_logo-850x6391.png";
import pngwing1 from "./assets/pngwing1.png";
import channels4 from "./assets/channels4_profile1.png";

export const Brands2 = () => {
  return (
    <section id="brands-page">
      <h1>БРЕНДЫ</h1>
      <div className="brand">
        <a href="#">
          <div className="brand_logo">
            <img src={image45} alt="" />
          </div>
        </a>
        <a href="#">
          <div className="brand_logo">
            <img src={pngwing1} alt="" />
          </div>
        </a>
        <a href="#">
          <div className="brand_logo">
            <img src={image2} alt="" />
          </div>
        </a>
        <a href="#">
          <div className="brand_logo">
            <img src={zatecky_gus} alt="" />
          </div>
        </a>
        <a href="#">
          <div className="brand_logo">
            <img src={channels4} alt="" />
          </div>
        </a>
      </div>
    </section>
  );
};
