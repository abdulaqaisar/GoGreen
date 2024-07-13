import React from "react";
import "./GreenHero.css";
const GreenHero = ({title,subtitle,image,height,height1,marginb}) => {
  return (
    <>
      <div
        className="ghero"
        style={{
          borderTop: "1px solid #cdc8c8",
          display: "flex",
          flexDirection: "row",
          background: "white",
        }}
      >
        <div
          className="glefthero"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ height:{height}, marginBottom: "18px" }}>
          {title}
          </h1>
          <p style={{ height:{height1}, marginBottom:{marginb} }}>{subtitle}</p>
          <div className="gherobtn">
            <button
              className="gbtn" id="gbtn2"
            >
              Shop Eco-friendly
            </button>
          </div>
        </div>
        <div className="grighthero">
          <img src={image} alt="" className="gheroimg"/>
        </div>
      </div>
    </>
  );
};

export default GreenHero;
