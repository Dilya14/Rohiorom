import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <div className="admin-panel">
      <p>
        Панель администратора сайта <br />
        ООО “Рохи Ором”
      </p>
      <div className="login">
        Логин <br />
        <input
          type="text"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <br />
        Пароль <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <div>
          <span>Забыли пароль?</span>
          <button
            onClick={() => {
              axios
                .post("http://condaprod.ru:8080/login", {
                  login: login,
                  password: password,
                })
                .then(() => {
                  toast.success("Вы успешно вошли", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((err) => {
                  toast.error("Вы ввели неправильный логин или пароль", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  });
                });
              // if (login === "admin" && password === "12345") {
              //   toast.success("Вы успешно вошли", {
              //     position: "top-right",
              //     autoClose: 1000,
              //     hideProgressBar: false,
              //     closeOnClick: true,
              //     pauseOnHover: false,
              //     draggable: true,
              //     progress: undefined,
              //   });
              //   localStorage.setItem("token", "123");
              //   setTimeout(() => {
              //     navigate("/admin-main", { replace: true });
              //   }, 1500);
              // } else {
              //   toast.error("Вы ввели неправильный логин или пароль", {
              //     position: "top-right",
              //     autoClose: 2000,
              //     hideProgressBar: false,
              //     closeOnClick: true,
              //     pauseOnHover: false,
              //     draggable: true,
              //     progress: undefined,
              //   });
              // }
            }}
          >
            Войти
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};
