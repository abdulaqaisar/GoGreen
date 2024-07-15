import React from "react";
import "./GreenInfo1.css";

const GreenInfo1 = ({ heading, image, isAbout , clr }) => {
  return (
    <>
      <div
        className="i1hero"
        style={{
          display: "flex",
          flexDirection: "row",
          background: "white",
        }}
      >
        <div
          className="i1lefthero"
          style={{
            flexDirection: "column",
          }}
        >
          <h1 style={{ height: "20vh", marginBottom: "18px" ,color:clr }}>{heading}</h1>
          <ul>
            <li>The packaging alternatives we provide consumers also suit</li>
            <li>their demands and go above and beyond their expectations.</li>
            <li>Reusable</li>
            <li>Recyclable</li>
            <li>Biodegradable and non-polluting</li>
            <li>Not harmful to humans and animals</li>
            <li>Manufactured with recycled materials</li>
            <li>Contain no toxic elements or materials</li>
          </ul>

          {!isAbout ? (
            <></>
          ) : ( 
            <div className="i1herobtn">
              <button className="i1btn" id="i1btn2">
                Shop Eco-friendly
              </button>
            </div>
          )}
        </div>
        <div className="i1righthero">
          <img src={image} alt="" className="i1heroimg" />
        </div>
      </div>
    </>
  );
};

export default GreenInfo1;
