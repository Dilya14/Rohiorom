import React from "react";
import { AddBrand } from "../../components/AddBrand/AddBrand";
import { AdminPanelNavbar } from "../../components/AdminPanelNavbar/AdminPanelNavbar";

export const AddBrands = () => {
  return (
    <>
      <AdminPanelNavbar />
      <AddBrand />
    </>
  );
};
