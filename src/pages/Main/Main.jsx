import React, { useState } from "react";
import { About } from "../../components/About/About";
import { Brands } from "../../components/Brands/Brands";
import { Clients } from "../../components/Clients/Clients";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { Partners } from "../../components/Partners/Partners";

export const Main = () => {
  const [main] = useState(false);
  return (
    <>
      <Navbar main_actives={main} />
      <Header />
      <About />
      <Brands />
      <Partners />
      <Clients />
      <Footer />
    </>
  );
};
