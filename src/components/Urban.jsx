import React from "react";
import "./Urban.css";
import image from "../assets/images/herobox.png";
const Urban = () => {
    return(
<>
{/* why urban */}
  <div className="top">
    <div className="line1"></div>
    <h2 className="Ins">Why Urban Boxes</h2>
    <div className="line2"></div>
  </div>;

<div className="urban">

  {/* LEFT SIDE */}
  <div className="urbanleft">
      <div>
            <h2>Your Packaging Success Starts with Urban Boxes!</h2>
            <p>we strive to provide superior services and solutions that surpass your expectations. Let us find the ideal packaging solution for your project.</p>
      </div>
  </div>
  {/* RIGHT SIDE */}
  <div className="urbanright">
    <div className="imgsec">
      <img src={image} alt="" />
    </div>  

</div>
</div>

<div className="inspirationaldesigns">   
     <div className="top">
     <div className="line1"></div>
        <h2 className="Ins">Premium Finishes</h2>
    <div className="line2"></div>
     </div> 
        <p className="para">Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging.</p>
    </div>

    <div className="imagegroup">
      <div className="img1" style={{height:"55%",width:"20%",background:"rgb(8, 8, 46)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"50px 0px 0px 50px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
      <div className="img2" style={{height:"38%",width:"20%",background: "rgb(113, 185, 219)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"0px 0px 0px 30px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
     <div className="img3" style={{height:"38%",width:"20%",background:"rgb(1, 169, 207)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"25px 0px 0px 30px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
     <div className="img4" style={{height:"55%",width:"20%",background: "rgb(243, 170, 141)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"50px 0px 0px 50px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
     <div className="img5" style={{height:"25%",width:"20%",background: " rgb(0, 45, 68)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"20px 0px 0px 50px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
     <div className="img6" style={{height:"45%",width:"20%",background: "rgb(243, 170, 141)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"-120px 0px 0px 30px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
     <div className="img7" style={{height:"45%",width:"20%",background: "rgb(225, 231, 235)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"-90px 0px 0px 35px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
     <div className="img8" style={{height:"25%",width:"20%",background: "rgb(123, 90, 52)", display:"flex",alignItems:"center" , justifyContent:"center",borderRadius:"15px", margin:"20px 0px 0px 50px "}}>
        <img src={image} alt=""  style={{ width:"70%" }}/>
     </div>
    </div>
</>  
  )
};

export default Urban;
