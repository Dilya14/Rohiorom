import React from "react";
import { AdminPanelMain } from "../../components/AdminPanelMain/AdminPanelMain";
import { AdminPanelNavbar } from "../../components/AdminPanelNavbar/AdminPanelNavbar";

export const AdminPanel = () => {
  return localStorage.getItem("token") ? (
    <>
      <AdminPanelNavbar />
      <AdminPanelMain />
    </>
  ) : (
    <div>404</div>
  );
};
