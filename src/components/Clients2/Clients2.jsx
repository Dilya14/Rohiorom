import React, { useState } from "react";
import "./style.css";
import Warranty from "./assets/Warranty.png";
import ClientManagement from "./assets/ClientManagement.png";
import FreeShipping from "./assets/FreeShipping.png";
import Categorize from "./assets/Categorize.png";
import SalePriceTag from "./assets/SalePriceTag.png";
import Marketing from "./assets/Marketing.png";
import { Modal } from "react-responsive-modal";

export const Clients2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="clients-page">
      <h1>ДОРОГОЙ КЛИЕНТ</h1>
      <p className="text-2">
        Компания Рохи Ором поставляет продукцию в сетевую и несетевую розницу,
        на оптовые рынки, оптовые базы, в отели, рестораны и кафе крупных
        городов Республики Таджикистан. Мы также работаем с регионами на
        условиях самовывоза.
      </p>
      <h4>
        У НАС В АССОРТИМЕНТЕ, ТАК ЖЕ ЕСТЬ РАЗЛИВНОЕ ПИВО И ОБОРУДОВАНИЕ ДЛЯ ЕГО
        РОЗЛИВА!
        <br />
        <br />
      </h4>
      <h4>СОТРУДНИЧАЯ С НАМИ ВЫ ПОЛУЧАЕТЕ:</h4>
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
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Оставить заявку
      </button>
      <Modal
        classNames="check"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        center
      >
        <div className="feedback mfeed">
          <h3>ОБРАТНАЯ СВЯЗЬ</h3>
          <p className="text-1">
            У вас остались вопросы?
            <br />
            Оставьте свое сообщение и мы ответим вам в ближайшее время
          </p>
          <div>
            <p className="name">
              Имя
              <br />
              <input type="text" />
            </p>
            <p>
              Город/район
              <br />
              <input type="text" />
            </p>
          </div>
          <div>
            <p className="email">
              Эл.почта
              <br />
              <input type="text" />
            </p>
            <p>
              Телефон
              <br />
              <input type="text" />
            </p>
          </div>
          <p>
            Текст
            <br />
            <textarea cols="63" rows="6"></textarea>
          </p>
          <button>Отправить заявку</button>
        </div>
      </Modal>
    </section>
  );
};
