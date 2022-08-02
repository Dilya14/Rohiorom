import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo3 from "./assets/logo3.png";
import WhatsApp from "./assets/WhatsApp.png";
import Instagram from "./assets/Instagram.png";
import Facebook from "./assets/Facebook.png";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <section id="footer">
      <div className="footer_logo">
        <img src={logo3} alt="Logo" />
        <p>Ⓒ 2022 rohiorom.tj. Все права защищены.</p>
      </div>
      <div className="footer_menu">
        <ul>
          <li>
            <Link to="/">О компании</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/clients">Клиентам</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
        </ul>
        <hr />
        <div className="contact">
          <p>
            <BsTelephoneFill /> <span>(+992) 88 000 6084</span>
          </p>
          <p>
            <FaEnvelope /> <span>office@rohiorom.tj</span>
          </p>
          <p>
            <IoLocationSharp /> <span>г. Худжанд, пр-т И.Сомони, 44</span>
          </p>
        </div>
        <div className="social-networks">
          <a href="#">
            <img src={WhatsApp} alt="WhatsApp" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </section>
  );
};
