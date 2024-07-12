import React, { useState } from "react";
import "./Pagehead";
const Pagehead = ({ heading, paragraph }) => {
  return (
    <>
      <div className="inspirationaldesigns">
        <div className="top">
          <div className="line1"></div>
          <h2 className="Ins">{heading}</h2>
          <div className="line2"></div>
        </div>
        <p className="para">{paragraph}</p>
      </div>
    </>
  );
};

export default Pagehead;
