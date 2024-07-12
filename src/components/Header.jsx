import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import image from "../assets/images/logo.png";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* header */}
      <div className="head">
        {/* header top */}
        <div className="headtop">
          {/* left side  */}
          <div className="left">
            <p>Follow Us On :</p>
            <div className="icons">
              <div className="social-icons">
                <FaFacebook />
              </div>
              <div className="social-icons">
                <FaInstagram />
              </div>
              <div className="social-icons">
                <FaYoutube />
              </div>
              <div className="social-icons">
                <FaPinterest />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="right">
            <div className="blog">
              <a href="">Blog</a>
            </div>
            <div className="contact">
              <a href="">Contact Us</a>
            </div>
            <div className="help">
              <a href="">Help</a>
            </div>
            <button className="greenbtn">
              <span>Go Green</span>
            </button>
          </div>
        </div>
        {/* header bottom */}
        <div className="headerbottom">
          <div
            className="bhtop"
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "25px 0px 40px 0px",
              height: "15vh",
              //   border: "1px solid black",
            }}
          >
            {/* logo */}
            <img
              src={image}
              alt="logo"
              className="logo"
              style={{ height: "50px", margin: "20px 50px" }}
            />
            {/* search bar */}
            <div
              className="searbar"
              style={{
                border: "1.3px solid  rgb(117, 175, 117)",
                width: "320px",
                height: "8vh",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 20px 0px 15px",
                margin: "20px 0px 0px 40px ",
              }}
            >
              {/* Search Input */}
              <input
                type="text"
                id="search"
                placeholder="Search"
                style={{
                  height: "40px",
                  width: "90%",
                  border: "0px solid",
                  outline: "none",
                }}
              />
              {/* Search logo */}
              <CiSearch style={{ fontSize: "20px" }} />
            </div>
            {/* Call Details */}
            <div
              className="call"
              style={{
                width: "50px",
                height: "50px",
                margin: "20px 0px 0px 60px",
                border: "1px solid rgb(117, 175, 117)",
                borderRadius: "25px",
              }}
            >
              <IoCall
                style={{
                  height: "30px",
                  width: "38px",
                  display: "flex",
                  alignItems: "center",
                  margin: "11px 0px 0px 6px",
                  color: "green",
                }}
              />
            </div>
            {/* contactnumber */}
            <div
              className="contactnumber"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 0px 0px 5px",
                // border: "1px solid black",
              }}
            >
              <h2
                style={{
                  fontWeight: "800",
                  fontSize: "16px",
                  marginTop: "9px",
                }}
              >
                Call Us Toll Free
              </h2>
              <p
                style={{
                  fontWeight: "800",
                  fontSize: "16px",
                  margin: "-4px 0px 5px",
                }}
              >
                +92-309-999999-1
              </p>
            </div>
            {/* Request Details */}
            <div
              className="request"
              style={{
                width: "50px",
                height: "50px",
                margin: "20px 0px 0px 70px",
                border: "1px solid rgb(117, 175, 117)",
                borderRadius: "25px",
              }}
            >
              <FaBoxOpen
                style={{
                  height: "25px",
                  width: "28px",
                  display: "flex",
                  alignItems: "center",
                  margin: "13px 10px 0px 11px",
                  color: "green",
                }}
              />
            </div>
            <div
              className="request"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 0px 0px 5px",
                // border: "1px solid black",
              }}
            >
              <h2
                style={{
                  fontWeight: "800",
                  fontSize: "16px",
                  marginTop: "9px",
                }}
              >
                Request Free
              </h2>
              <p
                style={{
                  fontWeight: "800",
                  fontSize: "16px",
                  margin: "-4px 0px 5px",
                }}
              >
                Get A Quote
              </p>
            </div>
          </div>

          <div
            className="hbbottom"
            style={{
              borderBottom: "1px solid cdc8c8",
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
              height: "8vh",
            }}
          >
            <div
              className="navlist"
              style={{ display: "flex", marginLeft: "90px" }}
            >
              <a href="/">Home</a>
              <a href="/Category">Category</a>
              <a href="">Go Green</a>
              <a href="">Luxury Furnitures</a>
              <a href="">By Style </a>
              <a href="">About Us </a>
              <a href="">Contact Us </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
