import React from "react";
import "./Contactform.css";
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoTimerSharp } from "react-icons/io5";
const Contactform = () => {
  return (
    <>
      <div className="newcontactform">
        <div className="newcontactleft" >
          <h2>Full Name</h2>
          <div>
          <input type="text" name="" id="newname" />
          </div>
          <h2>Email</h2>
          <div className="newemail">
          <input type="email" name="" id="newemail" /></div>
         
          <h2>Phone</h2>
          <div className="newphone">
          <input type="phone" name="" id="newphone" /></div>
          <h2>Message</h2>
          <textarea name="" id="" style={{ width:"62%", height:"10%" , padding:"6%" }}></textarea>
          <span>
          <button className="newsend">Send Message</button>
          </span>
        </div>
      
        <div className="newcontactright">
          <h1 style={{fontSize:"48px" , color:"green" , fontWeight:"700"}}>Looking for instant support?</h1>
          <h1 style={{fontSize:"42px", fontWeight:"600"}}>Speak with our experts within a minute.</h1>
          <p style={{fontSize:"25px", fontWeight:"400"}}>Get in contact with our packaging experts in a matter of minutes for direct support to your packaging needs.</p>
          <h1 style={{fontSize:"30px", fontWeight:"600" , color:"green" , margin:"0px"}}>Contact</h1>
          <div className="newcontact">
          {/* <div style={{ display:"flex" }}> */}
            <div className="newphone" style={{ display:"flex" , alignItems:"center", height:"10vh"
             }}>
            <MdPhone style={{ fontSize:"20px",marginRight:"10px" }}/>
            <h2 style={{ fontSize:"20px" , fontWeight:"300" }}>0000-000-0000</h2>
            </div>
            <div className="newemail"  style={{ display:"flex" , alignItems:"center", height:"10vh" , marginLeft:"30%"
             }}>
            <MdOutlineMailOutline style={{ fontSize:"20px",marginRight:"10px" }}/>
            <h2 style={{ fontSize:"20px" , fontWeight:"300" }}>company@boxes.com</h2>
            </div>
            {/* </div> */}
            <div className="newaddress"  style={{ display:"flex" , alignItems:"center"
             }}>
            <ImLocation2 style={{ fontSize:"20px",marginRight:"10px" }}/>
            <h2 style={{ fontSize:"20px" , fontWeight:"300" }}>Los Vegas, LV 22001</h2>
            </div>
            <div className="newtiming"  style={{ display:"flex" , alignItems:"center" ,marginLeft:"21%"
             }}>
            <IoTimerSharp style={{ fontSize:"20px",marginRight:"10px" }}/>
            <h2 style={{ fontSize:"20px" , fontWeight:"300" }}>Mon - Fri: 8:00 - 6:00 PM</h2>
            </div>
          </div>
          <h1 style={{fontSize:"30px", fontWeight:"600" , color:"green" , marginTop:"10px"}}>Sales Inquiries</h1>
          <div className="newsalesinquiries">
            <div style={{ display:'flex', alignItems:"center", height:"3px", justifyContent:"space-between" , width:"89%" }}>
            <div className="newphone" style={{ display:"flex" , alignItems:"center", height:"0vh"
             }}>
            <MdOutlineMailOutline style={{ fontSize:"20px",marginRight:"10px" }}/>
            <h2 style={{ fontSize:"20px" , fontWeight:"300" }}>Boxes@uerban.com</h2>
            </div>
            <div className="newtiming"  style={{ display:"flex" , alignItems:"center"
             }}>
            <IoTimerSharp style={{ fontSize:"20px",marginRight:"10px" }}/>
            <h2 style={{ fontSize:"20px" , fontWeight:"300" }}>Mon - Fri: 8:00 - 6:00 PM</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
