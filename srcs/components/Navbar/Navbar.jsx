import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./assets/logo1.png";
import { BsTelephoneFill } from "react-icons/bs";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav_menu">
        <ul className={classNames({ menu_active: menu })}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/">О компании</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/brand">Бренды</Link>
          </li>
          <li>
            <Link to="/clients">Клиентам</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/contact">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className="phone_number">
        <a href="tel:880006084">
          <BsTelephoneFill /> (+992) 88 000 6084
        </a>
      </div>
      <div
        className="btn-menu"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div id="nav-icon1" className={classNames({ open: menu })}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
