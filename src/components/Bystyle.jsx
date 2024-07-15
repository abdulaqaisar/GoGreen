import React from "react";
import "./Bystyle.css";
import image from '../assets/images/herobox.png'

const Bystyle = () => {
  return (
    <>
      <div className="stylegreen">
        {/* LEFT SIDE */}
        <div className="styleleftgreen">
          <h1 style={{ fontSize: "3rem" }}>By Style</h1>
          <p style={{ width: "100%", fontSize: "25px", fontWeight: "520" }}>
          Elevate your brand image with customizable box style to match your vision.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="stylerightgreen">
          <img
            src={image}
            alt=""
            style={{height: '100%', width:"90%" }}
          />
        </div>
      </div>
    </>
  );
};
export default Bystyle;
