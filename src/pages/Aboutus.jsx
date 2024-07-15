import React from "react";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Pagehead from "../components/Pagehead";
import GreenInfo from "../components/GreenInfo";
import GreenInfo1 from "../components/GreenInfo1";
import GreenInfo2 from "../components/GreenInfo2";
import image5 from "../assets/images/about1.png";
import image2 from "../assets/images/about2.png";
import image3 from "../assets/images/about3.png";
import image4 from "../assets/images/about4.png";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus">
        <Header />
        <About
          heading={"About Us"}
          paragraph={
            "Exquisite and Rich Packaging that reflects your brand's excellence and complements your products"
          }
        />
        <Pagehead
          heading={"ABOUT URBAN BOXES"}
          paragraph={
            "Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."
          }
        />
        <GreenInfo
          heading="Who We Are"
          paragraph="Custom Boxes Hub is a first-rate packaging solution platform dedicated to assisting small and large business owners with the highest quality, well-designed, and highly affordable packaging needs. Select from the largest packaging range of premium material boxes to satisfy your products' requirements or order printed custom packaging boxes in any shape, size, color, design, and luxury finishing, we will manufacture them for you. Our in-house designing, manufacturing, and printing facilities allow us to make packaging easier for you!"
          image={image5}
          height={"20px"}
          clr={"#196F3D"}
        />
        <GreenInfo2
          heading="Our History"
          paragraph="Custom Boxes Hub is a first-rate packaging solution platform dedicated to assisting small and large business owners with the highest quality, well-designed, and highly affordable packaging needs. Select from the largest packaging range of premium material boxes."
          image={image2}  clr='#196F3D '
        />
        <GreenInfo1
          heading="What WE DO?"
          paragraph="1. Label Claims are Backed By Research:"
          image={image3}
          isAbout={false} clr='#196F3D '
        />
        <GreenInfo2
          heading="We Value Our Clients!"
          paragraph="Custom Boxes Hub is a first-rate packaging solution platform dedicated to assisting small and large business owners with the highest quality, well-designed, and highly affordable packaging needs. Select from the largest packaging range of premium material boxes to satisfy your products' requirements or order printed custom packaging boxes in any shape, size, color, design, and luxury finishing"
          image={image4}
          isAbout={false}
          clr="#196F3D"
        />
        <Pagehead heading={'Brands That Trust Urban'} paragraph={'Extravagant custom packaging helps thousands of ambitious customers to redefine and refine their businesses and transform their packaging to better serve their customers.'}/>
        <Info />
        <br /><br /><br />
        <Footer />
      </div>
    </>
  );
};
export default Aboutus;
