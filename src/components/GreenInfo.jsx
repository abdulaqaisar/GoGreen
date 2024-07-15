import React from "react";
import "./GreenInfo.css";

const GreenInfo = ({ heading, paragraph, image, height, isAbout, clr }) => {
  // console.log(h);
  return (
    <>
      <div
        className="ihero"
        style={{
          display: "flex",
          flexDirection: "row",
          background: "white",
        }}
      >
        <div
          className="ilefthero"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ height:  height , marginBottom: "18px", color: clr }}>
            {heading}
          </h1>
          <p>{paragraph}</p>
          {!isAbout ? (
            <></>
          ) : (
            <div className="iherobtn">
              <button className="ibtn" id="ibtn2">
                Shop Eco-friendly
              </button>
            </div>
          )}
        </div>
        <div className="irighthero">
          <img src={image} alt="" className="iheroimg" />
        </div>
      </div>
    </>
  );
};

export default GreenInfo;
