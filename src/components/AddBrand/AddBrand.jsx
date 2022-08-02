import React, { useState } from "react";
import "./style.css";
import { Modal } from "react-responsive-modal";
import image45 from "./assets/image45.png";
import pngwing1 from "./assets/pngwing1.png";
import image2 from "./assets/image2.png";
import zatecky_gus from "./assets/zatecky_gus_logo-850x6391.png";
import channels4 from "./assets/channels4_profile1.png";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

export const AddBrand = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section id="add-brand">
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
                <span>НАЗВАНИЕ БРЕНДА:</span>
                <input type="text" />
                <br />
              </div>
              <div className="description">
                <span>ОПИСАНИЕ:</span>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <br />
              </div>
              <button>СОХРАНИТЬ</button>
            </div>
          </div>
        </Modal>
        <div className="btn-add">
          <h2>БРЕНДЫ</h2>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            ДОБАВИТЬ БРЕНД
          </button>
        </div>
        <div className="brand">
          <div className="brand_logo">
            <span className="pencil">
              <BsPencilSquare />
            </span>
            <span className="trash">
              <BsTrash />
            </span>
            <img src={image45} alt="" />
          </div>
          <div className="brand_logo">
            <span className="pencil">
              <BsPencilSquare />
            </span>
            <span className="trash">
              <BsTrash />
            </span>
            <img src={pngwing1} alt="" />
          </div>
          <div className="brand_logo">
            <span className="pencil">
              <BsPencilSquare />
            </span>
            <span className="trash">
              <BsTrash />
            </span>
            <img src={image2} alt="" />
          </div>
          <div className="brand_logo">
            <span className="pencil">
              <BsPencilSquare />
            </span>
            <span className="trash">
              <BsTrash />
            </span>
            <img src={zatecky_gus} alt="" />
          </div>
          <div className="brand_logo">
            <span className="pencil">
              <BsPencilSquare />
            </span>
            <span className="trash">
              <BsTrash />
            </span>
            <img src={channels4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
