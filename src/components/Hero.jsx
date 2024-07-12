import React from "react";
import "./Hero.css";
import image from "../assets/images/herobox.png";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          borderTop: "1px solid #cdc8c8",
          display: "flex",
          flexDirection: "row",
          background: "#F3FFF6",
        }}
      >
        <div
          className="lefthero"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ height: "0px", marginBottom: "18px" }}>
            Custom Printed
          </h1>
          <h1 style={{ height: "7px" }}>Premium Finishes</h1>
          <p>One Step Solution For All Your Packaging Needs.</p>
          <div className="herobtn">
            <button
              className="btn" id="btn1"
            >
              Choose Packaging
            </button>
            <button
              className="btn" id="btn2"
            >
              Order Packaging
            </button>
          </div>
        </div>
        <div className="righthero">
          <img src={image} alt="" className="heroimg"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
