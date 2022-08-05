import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./assets/logo1.png";
import { BsTelephoneFill } from "react-icons/bs";

export const Navbar = (main_actives) => {
  const [menu, setMenu] = useState(false);
  console.log(main_actives);
  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav_menu">
        <ul className={classNames({ menu_active: menu })}>
          <li>
            <Link className={classNames({ active: main_actives })} to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/admin">О компании</Link>
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
