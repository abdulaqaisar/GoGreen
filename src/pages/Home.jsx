import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Contact from "../components/Contact";
import Urban from "../components/Urban";
import Gogreen from "../components/Gogreen";
import Info from "../components/Info";
import Faq from "../components/Faq";
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Header />
      <Hero  heading={"Custom Printed Premium Finishes"}  paragraph={"One-step Solution for All Your Packaging Needs."} />
      <Details />
      <Contact />
      <Urban />
      <Gogreen />
      <Info/>
      <Faq/>
      <Footer/>
      {/* <Pagehead/> */}
    </>
  );
};

export default Home;
