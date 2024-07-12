import React from "react";
import './Details.css'
import { CiBoxes } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { SiCodersrank } from "react-icons/si";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TbDeviceMobileStar } from "react-icons/tb";


const Details =()=>{
return(
<>
{/* inspirationaldesigns */}
    <div className="details">
    <div className="inspirationaldesigns">   
     <div className="top">
     <div className="line1"></div>
        <h2 className="Ins">Inspirational Designs</h2>
    <div className="line2"></div>
     </div> 
        <p className="para">Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging.</p>
    </div>
    {/* View All Products */}
    <div className="btnarea">
        <div className="productbtn">
        <button className="viewbtn">
              <CiBoxes className="ic"/>
              <span>View All Products</span>
        </button>
        </div>
    </div>
    <div className="inspirationaldesigns">   
     <div className="top">
     <div className="line1"></div>
        <h2 className="Ins">Product Branding</h2>
    <div className="line2"></div>
     </div> 
        <p className="para">Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging.</p>
    </div>

{/* Product Branding */}

<div className="productbranding">
{/* left section */}
<div className="leftside">
    <h4 style={{ color:"#1D1D1D", fontSize:"18px" , fontWeight:"bold" , marginTop:"60px" }}>Steps</h4>
    <h2 className="branding">How we do your Branding</h2>
</div>
{/* right section */}

<div className="right1">
   <div className="righthead">
    <h1>01</h1>
    <span><VscGraph/></span>
    </div>
    <div>
    <h2>Tech Landscape Assessment and</h2>
    <h2>Specialization</h2>
    <p>Tech Orchards initiates the branding process by delving into a comprehensive assessment of the tech landscape. This involves a thorough understanding of industry trends, competitor analysis, and pinpointing specific niches within the tech realm. By identifying target markets and their distinct needs, Tech Orchards strategically positions itself as a go-to solution provider within these specialized areas.</p>
    </div>
</div>
<div className="right2">
   <div className="righthead">
    <h1>02</h1>
    <span><SiCodersrank/></span>
    </div>
    <div>
    <h2>Digital Brand Strategy</h2>
    <h2>Crafting</h2>
    <p>Crafting the digital brand strategy for Tech Orchards entails translating its core values, technological expertise, and client-centric approach into a strategic blueprint. This encompasses defining the brand's digital voice, tone, and content strategy across various digital avenues. The strategy outlines how Tech Orchards will interact with its audience through platforms like social media, blog content, videos, and other digital touchpoints to build brand recognition and authority.</p>
    </div>
</div>


</div>
{/* next section */}
<div className="productbrandingmore">

{/* left section */}              
<div className="right1">
   <div className="righthead">
    <h1>03</h1>
    <span><AiOutlineFileSearch/></span>
    </div>
    <div>
    <h2>Online Visual Identity </h2>
    <h2>Forging</h2>
    <p>Tech Orchards forges a captivating visual identity in the digital realm by meticulously designing an engaging online presence. This encompasses designing an intuitively navigable website, fashioning a contemporary and memorable logo, curating a harmonious color palette, and ensuring a consistent design ethos across all digital interfaces. The aim is to create an impactful and enduring visual impression that resonates with the company's branding strategy.</p>
    </div>
</div>
<div className="right2">
   <div className="righthead">            
    <h1>04</h1>
    <span><TbDeviceMobileStar/></span>
    </div>
    <div>
    <h2>Tech-Centric Content Creation</h2>
    <h2>and Dissemination</h2>
    <p>
    Content lies at the core of Tech Orchards' digital branding strategy. Regular creation of insightful and pertinent content showcases its technological prowess, educates its audience.This content takes diverse forms such as blog articles, infographics, webinars, videos, and more. Tech Orchards strategically maps out the distribution of this content through avenues like social media, email campaigns.</p>
    </div>
</div>
{/* left section */}
<div className="rightcircle">  
    <span>
    <h2 className="branding">Have a project in your mind ?</h2>
    </span>
</div>
</div>
<div className="inspirationaldesigns">   
     <div className="top">
     <div className="line1"></div>
        <h2 className="Ins">Get Discounted Price</h2>
    <div className="line2"></div>
     </div> 
        <p className="para">we strive to provide superior services and solutions that surpass your expectations. Let us find the ideal packaging solution for your project.</p>
    </div>
</div>
</>
    )
}

export default Details;