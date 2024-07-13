import React from "react";
import "./Greendetails.css";

const Greendetails = ({ bgColor , border }) => {
  console.log(bgColor);
  return (
    <>
      <div className="pag" style={{ width: "100%", height: "80vh" }}>
        <div className="greendetails" style={{ backgroundColor: bgColor }}>
          <div className="waste" style={{ border:border }}>
            <h1>37%</h1>
            <span>Package Waste</span>
          </div>
          <div className="waste" style={{ border:border }}>
            <h1>3.7%</h1>
            <span>Global Carbon Omission</span>
            <span>packaging Share</span>
          </div>
          <div className="waste" style={{ border:border }}>
            <h1>8M TON</h1>
            <span>Contaminating Marine Life</span>
            <span>Per Year</span>
          </div>
          <div className="waste" style={{ border:border }}>
            <h1>10.45M</h1>
            <span>Raised in 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Greendetails;
