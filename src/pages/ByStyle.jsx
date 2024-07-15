import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Pagehead from "../components/Pagehead";
import Bystyle from "../components/Bystyle"
const ByStyle = () => {
  return (
    <>
      <Header />
      <Bystyle />
      <Pagehead
        heading={"Choose Your Boxes Styles"}
        paragraph={
          "We offer a wide range of custom box styles so you may find the exact product as per your custom requirements."
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
export default ByStyle;
