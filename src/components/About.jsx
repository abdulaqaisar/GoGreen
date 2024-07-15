import React from "react";
import './About.css'
import image from "../assets/images/about.png"

const About = ({heading,paragraph}) => {
    return (
      <>
        <div
          className="about"
          style={{
            borderTop: "1px solid #cdc8c8",
            display: "flex",
            flexDirection: "row",
            background: "#F3FFF6",
          }}
        >
          <div
            className="leftabout"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "",
            }}
          >
            <h1 style={{ height: "0px", marginBottom: "18px" }}>
              {heading}
            </h1>
            <p >{paragraph}</p>
          <div className="aboutbtn">
              <button
                className="aboutbtn" id="aboutbtn1"
              > Shop Now
              </button>
            </div>
          </div>
          <div className="rightabout">
            <img src={image} alt="" className="aboutimg"/>
          </div>
        </div>
      </>
    );
  };


export default About;