import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import image21 from "./assets/image21.png";
import image41 from "./assets/image41.png";
import image43 from "./assets/image43.png";
import image23 from "./assets/image23.png";
import image27 from "./assets/image27.png";
import image24 from "./assets/image24.png";
import { BsFillCalendar3EventFill } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { Modal } from "react-responsive-modal";

export const Product = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="product">
      <div className="add">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          ДОБАВИТЬ ТОВАР
        </button>
        <div>
          <p>
            <span className="icon">
              <BsFillCalendar3EventFill />
            </span>
            КОЛИЧЕСТВО ТОВАРОВ:
            <span>500</span>
          </p>
          <p>
            <span className="icon">
              <AiFillTag />
            </span>
            КОЛИЧЕСТВО БРЕНДОВ: <span>7</span>
          </p>
        </div>
      </div>
      <div className="product-table">
        <table>
          <tr>
            <th>ФОТОГРАФИЯ</th>
            <th>ОПИСАНИЕ ТОВАРА</th>
            <th>КАТЕГОРИЯ ТОВАРА</th>
            <th>БРЕНД</th>
            <th>ПОДРОБНЕЕ</th>
          </tr>
          <tr>
            <td>
              <img src={image21} alt="" />
            </td>
            <td>Балтика 7</td>
            <td>Алкогольные напитки</td>
            <td>Балтика</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image41} alt="" />
            </td>
            <td>Flash Up Energy</td>
            <td>Безалкогольные напитки</td>
            <td>Flash up</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image43} alt="" />
            </td>
            <td>Flash Up Ultra Energy</td>
            <td>Безалкогольные напитки</td>
            <td>Flash up</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image23} alt="" />
            </td>
            <td>Zatecky Gus Svetly</td>
            <td>Алкогольные напитки</td>
            <td>Zatecky Gus</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image27} alt="" />
            </td>
            <td>Tuborg</td>
            <td>Алкогольные напитки</td>
            <td>Tuborg</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image24} alt="" />
            </td>
            <td>Kronenbourg 1664 Blanc</td>
            <td>Алкогольные напитки</td>
            <td>Kronenbourg 1664</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image41} alt="" />
            </td>
            <td>Flash Up Energy</td>
            <td>Безалкогольные напитки</td>
            <td>Flash up</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image43} alt="" />
            </td>
            <td>Flash Up Ultra Energy</td>
            <td>Безалкогольные напитки</td>
            <td>Flash up</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image23} alt="" />
            </td>
            <td>Zatecky Gus Svetly</td>
            <td>Алкогольные напитки</td>
            <td>Zatecky Gus</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image27} alt="" />
            </td>
            <td>Tuborg</td>
            <td>Алкогольные напитки</td>
            <td>Tuborg</td>
            <td>
              <span>
                <BsPencilSquare />
              </span>
              <span>
                <BsTrash />
              </span>
            </td>
          </tr>
        </table>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        center
      >
        <div className="add-product">
          <h3>ДОБАВИТЬ ТОВАР</h3>
          <div className="product-inf">
            <div className="select">
              <span>КАТЕГОРИЯ ТОВАРА:</span>
              <select>
                <option value="">ВЫБРАТЬ</option>
                <option value="">Алкогольные напитки</option>
                <option value="">Безалкогольные напитки</option>
              </select>
            </div>
            <br />
            <div className="select">
              <span>ВЫБРАТЬ БРЕНД:</span>
              <select>
                <option value="">ВЫБРАТЬ</option>
                <option value="">БАЛТИКА</option>
                <option value="">KRONENBOURG 1664</option>
                <option value="">TUBORG</option>
                <option value="">ZATECKY GUS</option>
                <option value="">FLASH</option>
              </select>
            </div>
            <br />
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
            <label>
              <span>НАЗВАНИЕ ТОВАРА:</span>
              <input type="text" />
            </label>
            <br />
            <label>
              ТИП ТОВАРА:
              <input type="text" />
            </label>
            <br />
            <label>
              СОРТ ТОВАРА:
              <input type="text" />
            </label>
            <br />
            <label>
              МАССА ТОВАРА
              <input type="text" />
            </label>
            <br />
            <button>ДОБАВИТЬ ТОВАР</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
