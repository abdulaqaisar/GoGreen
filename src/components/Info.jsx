import React from "react";
import "./Info.css"
import { CgNotes } from "react-icons/cg";
import { HiVideoCamera } from "react-icons/hi2";
import { GrDocumentTime } from "react-icons/gr";


const Info=()=>{

    return(
        <>
        
        <div className="info">
            <div className="customequote">
            <div
  className="call"
  style={{
    width: "70px",
    height: "70px",
    margin: "20px 0px 0px 0px",
    borderRadius: "50px",
    alignItems: "center",
    background: "rgb(68, 159, 90)",
    display: "flex",
    justifyContent: "center"
  }}
>
  <CgNotes
    style={{
      fontSize:"40px",
      color: "white",
      borderRadius: "35%", 
      backgroundColor: "rgb(68, 159, 90)",
      padding: "10px", 
    }}
  />
            </div>
                <h2>Custom Quote</h2>
                <p>In less then an hour, receive the quickest bespoke quote.</p>
                <button className="callbtn">Call Me</button>
            </div>
            <div className="call">
            <div
  className="call"
  style={{
    width: "70px",
    height: "70px",
    margin: "20px 0px 0px 0px",
    borderRadius: "50px",
    alignItems: "center",
    background: "rgb(68, 159, 90)",
    display: "flex",
    justifyContent: "center"
  }}
>
  <GrDocumentTime
    style={{
      fontSize:"40px",
      color: "white",
      borderRadius: "35%", 
      backgroundColor: "rgb(68, 159, 90)",
      padding: "10px", 
    }}
  />
            </div>
                <h2>Schedule a call</h2>
                <p>Seamless way to reach Via Schedule call at desired time.</p>
                <button className="callbtn">Get A Quote</button>
            </div>
            <div className="meeting">
            <div
  className="call"
  style={{
    width: "70px",
    height: "70px",
    margin: "20px 0px 0px 0px",
    borderRadius: "50px",
    alignItems: "center",
    background: "rgb(68, 159, 90)",
    display: "flex",
    justifyContent: "center"
  }}
>
  <HiVideoCamera
    style={{
      fontSize:"40px",
      color: "white",
      borderRadius: "35%", 
      backgroundColor: "rgb(68, 159, 90)",
      padding: "10px", 
    }}
  />
            </div>
                <h2>Schedule a zoom meeting</h2>
                <p>Enhance your trust in us by getting more clarity in your designs.</p>
                <button className="callbtn">Call Me</button>
            </div>
        </div>
        </>
    )
}
export default Info;