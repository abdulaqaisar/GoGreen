import React from "react";
import './GreenInfo2.css';

const GreenInfo2=({heading,paragraph,image,isAbout,clr})=>{
  //  console.log(color);
    return(
        <>
          <div
        className="i2hero"
        style={{
          display: "flex",
          flexDirection: "row",
          background: "white",
        }}
      >
         <div className="i2righthero">
          <img src={image} alt="" className="i2heroimg"/>
        </div>
        <div
          className="i2lefthero"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{color:clr, height: "20vh", marginBottom: "18px" }}>
          {heading}
          </h1>
          <p>{paragraph}</p>
          {!isAbout ? (
            <></>
          ) : ( 
          <div className="i2herobtn">
            <button
              className="i2btn" id="i2btn2"
            >
              Shop Eco-friendly
            </button>
          </div>
          )}
        </div>
      </div>
        </>
    )
}

export default GreenInfo2;