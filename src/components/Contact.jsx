import React from "react";
import './Contact.css'
// import { CiSearch } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";


const Contact=()=>{

    return(
        <>
        <div className="contactus">
          {/* side note box */}
        <div className="notebox" style={{ width:"35%" , height:"658px" }}>
            <div>
            <h2>Your Packaging Success Starts with Urban Boxes!</h2>
            <p>we strive to provide superior services and solutions that surpass your expectations. Let us find the ideal packaging solution for your project.</p>
            </div>
        </div>    
      
        {/* Contact Input Box */}
            <div className="contactbox" style={{ width: "50%", border:"1px solid #eae7e7" }}>
                <h2 style={{ fontSize:"36px" , fontWeight:"bold" ,marginBottom:"0px"}}>Request A Quote</h2>
                <p style={{ fontSize:"18px" , fontWeight:"300"}}>Complete our quote request form or email us at company@urban.com to receive a customized quote from our product specialists.</p>
                <div className="contacttop">
                    <div className="contactline1"></div>
                        <h2 className="contactins">Contact Info</h2>
                    <div className="contactline2"></div>
                </div> 

              <div className="inputrow1">
  {/* Fullname Input */}
                <div
              className="fullname"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                  {/* contact logo */}
                  <RiContactsLine style={{color:"green", fontSize: "20px" , margin:"10px" }} />
              <input
                type="text"
                id="fullname"
                placeholder="Full Name"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>
  {/* Email Input */}
                <div
              className="contact"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                  {/* Email logo */}
                  <MdEmail style={{color:"green", fontSize: "20px" , margin:"10px" }} />
              <input
                type="text"
                id="search"
                placeholder="Email"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>

            </div>
            <div className="inputrow2">
  {/* Phone Input */}
                <div
              className="contact"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                  {/* phone logo */} 
                  <FaPhone style={{ color:"green",fontSize: "20px" , margin:"10px" }} />
              <input
                type="text"
                id="search"
                placeholder="Phone"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>
  {/* Company Name Input */}
                <div
              className="company"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                  {/* contact logo */}
                  < BsBuildings  style={{ color:"green",fontSize: "20px" , margin:"10px" }} />
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>

        </div>
        <div style={{ display:"flex" , flexDirection:"row" }}>
   <input type="checkbox" name="" id="" style={{ margin:"30px 0px 0px 30px" , height:"20px" , width:"20px" }} />
   <h3 style={{ marginLeft:"20px" ,paddingTop:"10px" }}>Request A Callback</h3>
        </div>

        {/* PROJECT INFO */}
        <div className="contacttop">
                    <div className="contactline1"></div>
                        <h2 className="contactins">Project Info</h2>
                    <div className="contactline2"></div>
        </div> 
        
        <div style={{ display:"flex", flexDirection:"row" , marginTop:"30px" }}>
        <h5 style={{ fontSize:"12px" , color: "#696262" , margin:"0px 0px 10px 30px" }}>Name or Box Type <span style={{ color:"red" }}>*</span></h5>
        <h5 style={{ fontSize:"12px" , color: "#696262" , margin:"0px 0px 10px 185px" }}>Required Size <span style={{ color:"red" }}>*</span></h5>
        </div>
        <div className="infoinput">
                <div
              className="fullname"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                id="fullname"
                placeholder=""
                style={{
                  height: "40px",
                  width: "70%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>  
                <div
              className="contact"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                id="search"
                placeholder="LxWxH"
                style={{
                  height: "40px",
                  width: "90%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>

            </div>
        <div style={{ display:"flex", flexDirection:"row" , marginTop:"30px" }}>
        <h5 style={{ fontSize:"12px" , color: "#696262" , margin:"0px 0px 10px 30px" }}>Required Quantity <span style={{ color:"red" }}>*</span></h5>
        <h5 style={{ fontSize:"12px" , color: "#696262" , margin:"0px 0px 10px 185px" }}>Delivery Date <span style={{ color:"red" }}>*</span></h5>
        </div>
        <div className="infoinput">
                <div
              className="fullname"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                id="fullname"
                placeholder=""
                style={{
                  height: "40px",
                  width: "70%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>  
                <div
              className="contact"
              style={{
                border: "1.3px solid #696262",
                width: "230px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="Date"
                id="search"
                placeholder=""
                style={{
                  fontSize:"15px",
                  color:"gray",
                  height: "40px",
                  width: "90%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
            </div>

            </div>
               {/* Contact Buttons  */}

        <div className="contactbtn">
            <button
              className="cbtn" id="cbtn1"
            >
              Reset
            </button>
            <button
              className="cbtn" id="cbtn2"
            >
              Submit
            </button>
           </div>    
        </div>

            
    </div>
</>
    )
}

export default Contact;