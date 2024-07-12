import React from "react";
import "./Gogreen.css";
import Pagehead from "./Pagehead";
import image from '../assets/images/worldgreen.png'

const Gogreen = () => {
  return (
    <>
      <Pagehead heading="Go Green" paragraph={"Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."} />

      <div className="gogreen">
        
        {/* LEFT SIDE */}
        <div className="leftgreen">
                <h1>OUR MISSION - WELLNESS FOR LIFE!</h1>
                <p style={{ width:"120%", fontSize:"25px" , fontWeight:"300" }}>At Urban Boxes we aim to explore the goodness of nature with innovation. We are dedicated to play our role in building a happy & healthy community.</p>

                <button className="btngreen">Go Green</button>
        </div>
        {/* RIGHT SIDE */}
        <div className="rightgreen">
             <img src={image} alt=""  style={{ margin:"50px 0px 20px 130px" , height:"65vh" }}/>
        </div>
      </div>
      <Pagehead heading={"Brands That Trust Urban Boxes"} paragraph={"Extravagant custom packaging helps thousands of ambitious customers to redefine and refine their businesses and transform their packaging to better serve their customers."}/>
    </>
  );
};
export default Gogreen;