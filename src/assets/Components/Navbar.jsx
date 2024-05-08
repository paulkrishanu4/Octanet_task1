import './Navbar.css';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { Slidemenu } from './Slidemenu';




function Navbar(){
  const [nav, setNav] = useState(false);

  const togglemenu=()=>{
    setNav(!nav);
  };

  return<>
  <header>
    <div className="logo">
      <img src="./images/b_logo.png"/>
    </div>
    <div className="menu">
      <ul>
        <a className="underline-hover">HOME</a>
        <a className="underline-hover">PORTFOLIO<span><MdKeyboardArrowDown/></span></a>
        <a className="underline-hover">VIDEOS</a>
        <a className="underline-hover">CONTACT</a>
        <a className="underline-hover">BOOKNOW</a>
        <li><FaInstagram></FaInstagram></li>
        <li><FaTiktok></FaTiktok></li>
        
      </ul>
      <a className="nav-menu" onClick={togglemenu}><TiThMenu></TiThMenu></a>
    </div>
  </header>
  {
        nav && <Slidemenu></Slidemenu>
      }
  </>
}

export default Navbar;