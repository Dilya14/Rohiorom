import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Rectangle27 from "./assets/Rectangle27.png";
import Rectangle28 from "./assets/Rectangle28.jpg";
import Rectangle29 from "./assets/Rectangle29.png";

export const News = () => {
  return (
    <section id="news-page">
      <h1>АКТУАЛЬНЫЕ НОВОСТИ</h1>
      <div className="news">
        <div className="news_block">
          <img src={Rectangle27} alt="" />
          <div className="news_text">
            <h4>“БАЛТИКА” ОБЪЯВЛЯЕТ АКЦИЮ</h4>
            <p>
              Учавствуйте в акции выигрывайте день со сборной России по хоккею!
              Акция действует до 01 июня 2022 года.
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">
                <Link to="/news/:id">Подробнее</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle28} alt="" />
          <div className="news_text">
            <h4>FLASH ENERGY - ЗАРЯЖАЙ И УЕЗЖАЙ НА НОВОМ АВТОМОБИЛЕ</h4>
            <p>
              Заряжай призы энергией и выигрывай с регистрацией каждого кода на
              номер 3800!
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">Подробнее</span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle29} alt="" />
          <div className="news_text">
            <h4>СТАНЬ ЧАСТЬЮ GREENFEST TOUR</h4>
            <p>
              Учавствуй в розыгрыше 100 000 призов и стань обладаетем один из
              этих призов. Акция действует до 01 июня 2022 года.
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">Подробнее</span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle27} alt="" />
          <div className="news_text">
            <h4>“БАЛТИКА” ОБЪЯВЛЯЕТ АКЦИЮ</h4>
            <p>
              Учавствуйте в акции выигрывайте день со сборной России по хоккею!
              Акция действует до 01 июня 2022 года.
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">
                <Link to="/news/:id">Подробнее</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle28} alt="" />
          <div className="news_text">
            <h4>FLASH ENERGY - ЗАРЯЖАЙ И УЕЗЖАЙ НА НОВОМ АВТОМОБИЛЕ</h4>
            <p>
              Заряжай призы энергией и выигрывай с регистрацией каждого кода на
              номер 3800!
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">Подробнее</span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle29} alt="" />
          <div className="news_text">
            <h4>СТАНЬ ЧАСТЬЮ GREENFEST TOUR</h4>
            <p>
              Учавствуй в розыгрыше 100 000 призов и стань обладаетем один из
              этих призов. Акция действует до 01 июня 2022 года.
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">Подробнее</span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle27} alt="" />
          <div className="news_text">
            <h4>“БАЛТИКА” ОБЪЯВЛЯЕТ АКЦИЮ</h4>
            <p>
              Учавствуйте в акции выигрывайте день со сборной России по хоккею!
              Акция действует до 01 июня 2022 года.
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">
                <Link to="/news/:id">Подробнее</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle28} alt="" />
          <div className="news_text">
            <h4>FLASH ENERGY - ЗАРЯЖАЙ И УЕЗЖАЙ НА НОВОМ АВТОМОБИЛЕ</h4>
            <p>
              Заряжай призы энергией и выигрывай с регистрацией каждого кода на
              номер 3800!
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">Подробнее</span>
            </div>
          </div>
        </div>
        <div className="news_block">
          <img src={Rectangle29} alt="" />
          <div className="news_text">
            <h4>СТАНЬ ЧАСТЬЮ GREENFEST TOUR</h4>
            <p>
              Учавствуй в розыгрыше 100 000 призов и стань обладаетем один из
              этих призов. Акция действует до 01 июня 2022 года.
            </p>
            <div>
              <span className="date">23.05.2022 г.</span>
              <span className="more">Подробнее</span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-more">
        <button>ЕЩЁ</button>
      </div>
    </section>
  );
};
