import React from "react";
import { Contact } from "../../components/Contacts/Contacts";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Contacts = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};
