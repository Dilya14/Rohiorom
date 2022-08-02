import React from "react";
import "./style.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact-page">
      <h1>КОНТАКТЫ</h1>
      <div className="contact_block">
        <div className="contacts-details">
          <h3>Контактные данные</h3>
          <div>
            <div className="contact_img">
              <BsFillTelephoneFill />
            </div>
            <p>(+992) 88 000 6084</p>
          </div>
          <div>
            <div className="contact_img">
              <IoLogoWhatsapp />
            </div>
            <p>(+992) 88 000 6084</p>
          </div>
          <div>
            <div className="contact_img">
              <GrMail />
            </div>
            <p>office@rohiorom.tj</p>
          </div>
          <div>
            <div className="contact_img">
              <FaMapMarkerAlt />
            </div>
            <p>г. Худжанд, пр-т И. Сомони, 44</p>
          </div>
        </div>
        <div className="feedback">
          <h3>ОБРАТНАЯ СВЯЗЬ</h3>
          <p className="text-1">
            У вас остались вопросы?
            <br />
            Оставьте свое сообщение и мы ответим вам в ближайшее время
          </p>
          <div>
            <p>
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
            <p>
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
      </div>
    </section>
  );
};
