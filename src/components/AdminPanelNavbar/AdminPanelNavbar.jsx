import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

export const AdminPanelNavbar = () => {
  return (
    <section id="header">
      <div class="nav_top">
        <p>ООО “Рохи Ором”</p>
        <p>
          <Link to="/">Перейти на сайт</Link>
        </p>
        <Link to="/">
          <span>
            <IoExitOutline />
          </span>
          Выход
        </Link>
      </div>
      <div class="nav_left">
        <ul>
          <li>
            <Link to="/admin-main">
              <span>
                <AiOutlineHome />
              </span>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/products">
              <span>
                <BsShop />
              </span>
              Товары
            </Link>
          </li>
          <li>
            <Link to="/admin-news">
              <span>
                <IoNewspaperOutline />
              </span>
              Новости (Главная страница)
            </Link>
          </li>
          <li>
            <Link to="/admin-brand">
              <span>
                <IoNewspaperOutline />
              </span>
              Бренды
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
