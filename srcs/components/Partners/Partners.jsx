import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import rectangle17 from "./assets/Rectangle17.png";
import rectagle18 from "./assets/Rectangle18.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export const Partners = () => {
  const [openSecond, setOpenSecond] = useState(false);
  return (
    <section id="partners">
      <div class="block">
        <div class="block_img">
          <img src={rectangle17} alt="" />
        </div>
        <div class="block_text">
          <h3>КЛИЕНТАМ</h3>
          <p>
            Компания Рохи Ором поставляет продукцию в сетевую и несетевую
            розницу, на оптовые рынки, оптовые базы, в отели, рестораны и кафе
            крупных городов Республики Таджикистан. Мы также работаем с
            регионами на условиях самовывоза.
          </p>
          <Link to="/clients">Подробнее</Link>
        </div>
      </div>
      <div class="block">
        <div class="block_img">
          <img src={rectagle18} alt="" />
        </div>
        <div class="block_text">
          <h3>ПАРТНЕРАМ</h3>
          <p>
            Если Вы производитель и хотите стать нашим партнером, тогда
            отправьте ваши предложения. После рассмотрения вашего предложения мы
            обязательно свяжемся с вами. <br />
            <br />
          </p>
          <button
            class="mod-win2"
            onClick={() => {
              setOpenSecond(!openSecond);
            }}
          >
            Cтать партнером
          </button>
        </div>
      </div>
      <Modal
        open={openSecond}
        onClose={() => {
          setOpenSecond(false);
        }}
        center
      >
        <div class="popup-1">
          <div class="popup_main-1">
            <h3>ЕСЛИ ВЫ ПРОИЗВОДИТЕЛЬ</h3>
            <p>Отправьте ваше предложение для сотрудничества:</p>
            <div class="cooperation-request">
              <textarea
                name=""
                id=""
                cols="60"
                rows="7"
                placeholder="Написать текст"
              ></textarea>
              <input type="file" />
              <button class="btn-send">Отправить</button>
            </div>
            <h4>Контакты отдела продаж:</h4>
            <div class="contacts">
              <p>Телефон: (+992) 880 006 084</p>
              <p>E-mail: office@rohiorom.tj</p>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
