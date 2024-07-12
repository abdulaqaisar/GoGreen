import React from "react";
import "./Faq.css";
import Pagehead from "../components/Pagehead";
import image from "../assets/images/bulb.png";
const Faq = () => {
  return (
    <>
     <Pagehead
          heading={"FAQ'S"}
          paragraph={
            "we strive to provide superior services and solutions that surpass your expectations. Let us find the ideal packaging solution for your project."
          }
        />
      <div className="faq">
{/* LEFT */}
        <div className="faqleft">
          <div className="faqitem">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
          <div className="faqitem">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
          <div className="faqitem">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
          <div className="faqitem">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
        </div>
{/* RIGHT */}
<div className="faqleft">
          <div className="faqitemright">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
          <div className="faqitemright">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
          <div className="faqitemright">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
          <div className="faqitemright">
            <img src={image} alt="" />
            <div className="faqsetails">
              <h2>Can I get Wholesale price?</h2>
              <p>we strive to provide superior services and solutions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
