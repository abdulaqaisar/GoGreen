import React from "react";
import "./Categorygogreen.css";
import image from "../assets/images/herobox.png";
import { IoIosArrowForward } from "react-icons/io";

const Categorygogreen = () => {
  return (
    <>
    <div className="linkhead">
       <a href="./Home" style={{ textDecoration:"none" , color:"gray"}}>Home</a>
       <IoIosArrowForward style={{ color:"gray" , fontSize:"18px"}}/>
       <h4 style={{ color:"green" , fontWeight:"300",cursor:"pointer" }}>Category</h4>
    </div>  
      <div className="cgogreen">
        {/* LEFT SIDE */}
        <div className="cleftgreen">
          <h1 style={{ fontSize:"3rem" }}>All Categories</h1>
          <p style={{ width: "100%", fontSize: "25px", fontWeight: "520" }}>
          Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging.
          </p>

        </div>
        {/* RIGHT SIDE */}
        <div className="crightgreen">
          <img
            src={image}
            alt=""
            style={{ margin: "50px 0px 20px 130px", height: "45vh" }}
          />
        </div>
      </div>
    </>
  );
};
export default Categorygogreen;
