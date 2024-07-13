import React from "react";
import Header from "../components/Header";
import GreenHero from "../components/GreenHero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import PageHead from "../components/Pagehead";
import Greendetails from "../components/Greendetails";
import GreenInfo from "../components/GreenInfo";
import GreenInfo1 from "../components/GreenInfo1";
import GreenInfo2 from "../components/GreenInfo2";
import image1 from "../assets/images/luxury1.png"
import image2 from "../assets/images/luxury2.png"
import image3 from "../assets/images/luxury3.png"
import image4 from "../assets/images/luxury4.png"
import image5 from "../assets/images/luxury5.png"

const LuxuryFinishes=()=>{


    return (
        <>
          <Header />
          <GreenHero title={"Luxury Finishing"} subtitle={"Exquisite and Rich Packaging that reflects your brand's excellence and complements your products"} image={image1} height={"0vh"} height1={"0vh"}/>
          <PageHead
            heading={"Luxury Finishing"}
            paragraph={
              "Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."
            }
          />
          <Greendetails bgColor={"#F1E4C0"} border={"5px solid #EFCE6F"} />
          <GreenInfo heading= "Metallic Foiling" paragraph = "You can choose from a variety of metallic foiling alternatives at Custom Boxes Hub, such as gold, silver, copper foil, and others. Each metallic foil has unique qualities that make it suitable for a variety of uses and help your product to become extremely attractive. Silver and gold, for instance, both reflect light well. This means that while gold will work well to create eye-catching packaging for high-end goods, silver would be a better option if you want something that will endure longer and be more reasonably priced." image={image2} height={"20px"}/>
          <GreenInfo2 heading= "Impact of Eco-Friendly Packaging on your Business" paragraph = "At Urban Boxes, we are committed to creating sustainable packaging solutions that are not only good for the planet but profitable for your business. Eco-Friendly Packaging may help in the following ways:" image={image3}/>
          <GreenInfo1 heading= "Let's make a difference, together!" image={image4}/>
          <GreenInfo2 heading= "Invest in Eco-Friendly Packaging Today!" paragraph = "At Urban Boxes, we are committed to creating sustainable packaging solutions that are not only good for the planet but profitable for your business. Eco-Friendly Packaging may help in the following ways:" image={image5}/>
          <Info />
          <br />
          <br />
          <br />
          <Footer />
        </>
      );

}
export default LuxuryFinishes;