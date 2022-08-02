import React from "react";
import { useState } from "react";
import { Brands2 } from "../../components/Brands2/Brands2";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Brand = () => {
  const [brand] = useState(true);
  return (
    <>
      <Navbar brand_actives={brand} main_actives={false} />
      <Brands2 />
      <Footer />
    </>
  );
};
