import React, { useState } from "react";
import "./style.css";
import { Modal } from "react-responsive-modal";
import Rectangle27 from "./assets/Rectangle27.png";
import Rectangle28 from "./assets/Rectangle28.jpg";
import Rectangle29 from "./assets/Rectangle29.png";
import { BsPencilSquare } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";

export const AdminNews = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="add-news">
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        СОЗДАТЬ НОВОСТЬ
      </button>
      <div className="table-news">
        <table>
          <tr>
            <th>ФОТОГРАФИЯ</th>
            <th>ЗАГОЛОВОК</th>
            <th>ДАТА</th>
            <th>ДЕЙСТВИЯ</th>
          </tr>
          <tr>
            <td>
              <img src={Rectangle27} alt="" />
            </td>
            <td>“Балтика” объявляет акцию</td>
            <td>15.05.2022</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <GrFormNext />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Rectangle28} alt="" />
            </td>
            <td>Flash energy - заряжай и уезжай на новом автомобиле</td>
            <td>15.05.2022</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <GrFormNext />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Rectangle29} alt="" />
            </td>
            <td>Стань частью greenfest tour</td>
            <td>15.05.2022</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <GrFormNext />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Rectangle28} alt="" />
            </td>
            <td>Flash energy - заряжай и уезжай на новом автомобиле</td>
            <td>15.05.2022</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <GrFormNext />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Rectangle27} alt="" />
            </td>
            <td>“Балтика” объявляет акцию</td>
            <td>15.05.2022</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <GrFormNext />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
        </table>
        <div className="pages">
          <span>
            <GrFormPrevious />
          </span>
          <span>1</span>
          <span>
            <GrFormNext />
          </span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        center
      >
        <div className="popup-3">
          <div className="popup_main-3">
            <span>ФОТОГРАФИЯ</span>
            <div className="add-img">
              <div className="add-image">
                <label for="inputTag">
                  Добавить
                  <br /> Фото
                  <input
                    id="inputTag"
                    type="file"
                    accept="image/jpeg,image/png"
                  />
                  <span id="imageName"></span>
                </label>
              </div>
              <p>
                Только png, jpeg формат <br />
                Размер фотографии <br />
                не более 4 мб
              </p>
            </div>
            <div className="heading">
              <span>ЗАГОЛОВОК:</span>
              <input type="text" />
              <br />
            </div>
            <div className="description">
              <span>ОПИСАНИЕ:</span>
              <textarea name="" id="" cols="30" rows="5"></textarea>
              <br />
            </div>
            <div className="date">
              <span>ДАТА:</span>
              <input type="date" value="Выбрать дату" />
              <br />
            </div>
            <button>СОЗДАТЬ НОВОСТЬ</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
