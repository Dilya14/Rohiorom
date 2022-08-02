import React from "react";
import "./style.css";
import { BsFillCalendar3EventFill } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";

export const AdminPanelMain = () => {
  return (
    <section id="quantity">
      <p>
        <span>
          <BsFillCalendar3EventFill />
        </span>{" "}
        КОЛИЧЕСТВО ТОВАРОВ: <span>500</span>
      </p>
      <p>
        <span>
          <AiFillTag />
        </span>{" "}
        КОЛИЧЕСТВО БРЕНДОВ: <span>7</span>
      </p>
    </section>
  );
};
