import React from "react";
import './Footer.css'
import image from '../assets/images/logo.png'
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoTimerSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="fleft">
                    <div className="logo">
                        <img src={image} alt="" />
                        <div className="des">
                            <h1>Custom Printed Boxes & Packaging</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus libero iure unde earum, inventore ab omnis placeat delectus recusandae. Nisi reiciendis non dicta minima est sunt. Quaerat, voluptate necessitatibus.</p>
                        </div>
                    </div>
                </div>
                <div className="fleft">
                        <div className="mid">
                            <h1>COMPANY</h1>
                            <h3>About Us</h3>
                            <h3>Bolg</h3>
                            <h3>FAQ's</h3>
                            <h3>Terms & Conditions</h3>
                            <h3>Custom Quote</h3>
                            <h3>Contact Us</h3>
                            <h3>Sitemaps</h3>
                        </div>
                </div>
                <div className="fleft">
                        <div className="last">
                            <h1>CONTACT US</h1>
                            <h3><MdPhone style={{ fontSize:"24px"  , color:"white" }}/></h3>
                            <h3><MdOutlineMailOutline style={{ fontSize:"24px" , color:"white" }}/></h3>
                            <h3><ImLocation2 style={{ fontSize:"24px" , color:"white" }}/></h3>
                            <h3><IoTimerSharp style={{ fontSize:"24px" , color:"white" }}/></h3>
                            <h2>Follow Us On: </h2>
                        </div>
                        <div className="icon">
              <div className="social-icons1">
                <FaFacebook />
              </div>
              <div className="social-icons1">
                <FaInstagram />
              </div>
              <div className="social-icons1">
                <FaYoutube />
              </div>
              <div className="social-icons1">
                <FaPinterest />
              </div>
              <div className="social-icons1">
                <FaLinkedin />
              </div>
              <div className="social-icons1">
                <FaWhatsapp />
              </div>
            </div>
                </div>
            </div>
                
        </>
    )     
};

export default Footer