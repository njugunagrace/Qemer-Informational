import React from "react";
import './style.css';
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import logo from "../../assets/images/mwangaLogo.png";

const Footer = () =>{
return(
<>
<section id="contacts" className="foter">
    <div className="foot-cont">

<div className="footer-container">
<div >
<img className="logo" src={logo} alt="Logo" />
</div>


<div className="footer-links">
<a className="hom" href="#home">Home</a>
<a href="#what">What We Do</a>
<a href="#products">Products</a>
</div>
<div className="footer-contacts">
<a href="#contacts">Contact</a>
</div>
</div>

<div className="icons">
<a href="https://www.linkedin.com/in/qemer-kenya-/"><AiFillLinkedin /> </a>   &nbsp;&nbsp;&nbsp;&nbsp;
   <a href="mailto:qemerakirachix@gmail.com">< AiOutlineMail /></a>
 &nbsp;&nbsp;&nbsp;&nbsp;
 <a href="tel:+254713030706">< BsTelephone /> </a>

</div>

</div>

<div className="footer-reserved">
<p>All Rights Reserved</p>
</div>
</section>
</>
)
};
export default Footer;