import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Pagehead from "../components/Pagehead";
import Categorygogreen from "../components/Categorygogreen";
// import Categorygogreen from "../components/Gogreen";
const Category = () => {
  return (
    <>
      <Header />
      <Categorygogreen />
      <Pagehead
        heading={"All Categories"}
        paragraph={
          "Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."
        }
      />
      <Info />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Category;
