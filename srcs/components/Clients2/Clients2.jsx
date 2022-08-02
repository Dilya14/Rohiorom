import React from "react";
import "./style.css";
import Warranty from "./assets/Warranty.png";
import ClientManagement from "./assets/ClientManagement.png";
import FreeShipping from "./assets/FreeShipping.png";
import Categorize from "./assets/Categorize.png";
import SalePriceTag from "./assets/SalePriceTag.png";
import Marketing from "./assets/Marketing.png";

export const Clients2 = () => {
  return (
    <section id="clients-page">
      <h1>КЛИЕНТАМ</h1>
      <h4>ДОРОГОЙ КЛИЕНТ!</h4>
      <p className="text-2">
        Компания Рохи Ором поставляет продукцию в сетевую и несетевую розницу,
        на оптовые рынки, оптовые базы, в отели, рестораны и кафе крупных
        городов Республики Таджикистан. Мы также работаем с регионами на
        условиях самовывоза.
      </p>
      <h4>СОТРУДНИЧАЯ С НАМИ ВЫ ПУЛУЧАЕТЕ:</h4>
      <div className="advantages">
        <div className="adv_block">
          <img src={Warranty} alt="" />
          <p>Высокое качество сервиса</p>
        </div>
        <div className="adv_block">
          <img src={ClientManagement} alt="" />
          <p>Индивидуальный подход в работе к каждому клиенту</p>
        </div>
        <div className="adv_block">
          <img src={FreeShipping} alt="" />
          <p>Бесплатную доставку продукции в удобное для вас время</p>
        </div>
        <div className="adv_block">
          <img src={Categorize} alt="" />
          <p>Уникальный ассортимент представленных товаров</p>
        </div>
        <div className="adv_block">
          <img src={SalePriceTag} alt="" />
          <p>
            Оптимальные цены и гибкую систему скидок для постоянных клиентов
          </p>
        </div>
        <div className="adv_block">
          <img src={Marketing} alt="" />
          <p>Маркетинговую и рекламную поддержку</p>
        </div>
      </div>
      <h4>УСЛОВИЯ РАБОТЫ:</h4>
      <ul>
        <li>Выезд торгового представителя к клиенту</li>
        <li>Заключение долгосрочного договора</li>
      </ul>
    </section>
  );
};
