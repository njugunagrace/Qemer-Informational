
import React,{useState} from 'react'
import './style.css'
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import logo from "../../assets/images/mwangaLogo.png";

const Navbar = () => {
  const[menuVisible,setMenuVisible] = useState(false)
  return (
   <nav className='navbar' data-testid="navbar">
    <div className='logo'>
    <img src={logo} alt='logo'  data-testid="logo"/>
    </div>
    <ul className={`list  ${menuVisible? "nav-links-menu" : "nav-links"}`}
    onClick={() => setMenuVisible(false)}
    >
    
   <li data-testid="home" className='home'>Home</li>
   <li data-testid="product" className='product'>What We Do</li>
   <li data-testid="contact" className='contacts'>Products</li>
   <li data-testid="about" className='about'>Contact</li>
  </ul>
  <div className=''>
  <button className='menu-icon'
  onClick={() => setMenuVisible(!menuVisible)}
  >
   {menuVisible ? ( <FaTimes/>) : (<AiOutlineMenu/>)}
  </button>
  </div>
   </nav>
  )
}
export default Navbar

