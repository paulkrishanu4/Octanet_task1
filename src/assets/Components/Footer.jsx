import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

import './Footer.css';

export const Footer = () => {
  return (
    <div className="line">
      <a><MdCopyright/> 2024 Photography</a>
      <div className="social">
       <GrInstagram />
       <BsTwitterX />
       <FaFacebookSquare />
       <FaLinkedin />
        
      </div>
    </div>
  )
}
