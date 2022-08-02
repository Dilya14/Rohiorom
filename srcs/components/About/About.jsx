import React from "react";
import "./style.css";
import logo2 from "./assets/logo2.png";

export const About = () => {
  return (
    <section id="about-us">
      <div className="about">
        <div className="about_text">
          <h1>О КОМПАНИИ</h1>
          <p>
            Рохи Ором - более 18 лет занимается дистрибуцией товаров народного
            потребления в Республике Таджикистан. Является лидером рынка по
            импорту слабоалкогольной продукции. Имеет филиалы в основных городах
            страны, а также дилерскую сеть, что позволяет обеспечить необходимый
            ассортимент товаров во всех регионах.
          </p>
        </div>
        <div className="about_img">
          <img src={logo2} alt="Logo" />
        </div>
      </div>
      <div className="inf">
        <div class="circle">
          <p>
            <span className="text-3">БОЛЕЕ</span>
            <br /> <span class="num">18 </span>
            <span className="text">лет</span> <br /> на рынке РТ
          </p>
        </div>
        <div className="circle">
          <p>
            <span className="text-3">БОЛЕЕ</span>
            <br /> <span className="num">5 000</span>
            <br /> торговых <br /> точек
          </p>
        </div>
        <div className="circle">
          <p>
            <span className="text-3">БОЛЕЕ</span>
            <br /> <span className="num">3 000</span>{" "}
            <span className="text">
              м<sup>2</sup>
            </span>
            <br /> Площадь <br /> складов
          </p>
        </div>
        <div className="circle">
          <p>
            <span className="text-3">БОЛЕЕ</span>
            <br /> <span className="num">5</span>
            <br /> брендов
          </p>
        </div>
      </div>
    </section>
  );
};
