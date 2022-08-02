import React from "react";
import "./style.css";

export const AddNews = () => {
  return (
    <section id="add-news2">
      <div className="popup_main-3">
        <div className="heading">
          <span>ЗАГОЛОВОК:</span>
          <input type="text" />
          <br />
        </div>
        <span>ФОТОГРАФИЯ</span>
        <div className="add-img">
          <div className="add-image">
            <label for="inputTag">
              Добавить
              <br /> Фото
              <input id="inputTag" type="file" accept="image/jpeg,image/png" />
              <span id="imageName"></span>
            </label>
          </div>
          <p>
            Только png, jpeg формат <br />
            Размер фотографии <br />
            не более 4 мб
          </p>
        </div>
        <div className="description">
          <span>ОПИСАНИЕ:</span>
          <textarea name="" id="" cols="30" rows="5"></textarea>
          <br />
        </div>
        <div className="date">
          <span>ДАТА:</span>
          <input type="date" />
          <br />
        </div>
        <button>СОЗДАТЬ НОВОСТЬ</button>
      </div>
    </section>
  );
};
