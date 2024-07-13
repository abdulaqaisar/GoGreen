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
import image1 from "../assets/images/green1.png";
import image2 from "../assets/images/green2.png";
import image3 from "../assets/images/green3.png";
import image4 from "../assets/images/green4.png";
import image5 from "../assets/images/gohero.png";
const GoGreen = () => {
  return (
    <>
      <Header />
      <GreenHero
        title={"Go Greener with us to Create a Better Future for the Planet"}
        subtitle={"Create a Better Future for the Planet"}
        image={image5}
        height={"30vh"}
      />
      <PageHead
        heading={"Go Green"}
        paragraph={
          "we strive to provide superior services and solutions that surpass your expectations. Let us find the ideal packaging solution for your project."
        }
      />
      <Greendetails bgColor= "#CDF6D8"  border = "5px solid green"/>
      
      <GreenInfo
        heading="Our Packaging Materials Are Sustainable"
        paragraph="Eco-friendly packaging has no parameters to measure; however, we plays a vital role to mitigate the issue by using materials during the production procedure which reduce the environmental effect, do not harm the environment, and promote the health of humans and wildlife. Our innovative eco-friendly materials are biodegradable and renewable."
        image={image1}
      />
      <GreenInfo2
        heading="Impact of Eco-Friendly Packaging on your Business"
        paragraph="At Urban Boxes, we are committed to creating sustainable packaging solutions that are not only good for the planet but profitable for your business. Eco-Friendly Packaging may help in the following ways:"
        image={image3}
      />
      <GreenInfo1 heading="Let's make a difference, together!" image={image2} />
      <GreenInfo2
        heading="Invest in Eco-Friendly Packaging Today!"
        paragraph="At Urban Boxes, we are committed to creating sustainable packaging solutions that are not only good for the planet but profitable for your business. Eco-Friendly Packaging may help in the following ways:"
        image={image4}
      />
      <Info />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default GoGreen;
