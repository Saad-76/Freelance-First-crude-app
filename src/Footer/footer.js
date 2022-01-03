import "./footer.css"
import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import logopic from "../Assets/Blocktopia-BLACK.png";

const Footer = () => {
  return (
    <div class="footer2">
      <div class="footer1">
      <div class="social-logos">
      <p  >
      <img src={logopic} alt="pic" height="50px" width="200px"/> 
          </p>
          <p  >
            <FaFacebook size={15} /> Facebook
          </p>
            
          <p >
            <FiLinkedin size={15} />
            LinkedIn
          </p>
          <p >
            <FaYoutube size={15} />
            Youtube
          </p>
        </div>
        <div class="home-1">
          <p
            
          >
            Home
          </p>
          <p
          >
            about
          </p>
          <p
            
              
          >
            service
          </p>
            <p >Contact</p>
        </div>
        <div class="contact-us">
          <h4>Call us today?</h4>
          <p to="00923214898395">+44 (0) 1582 561 029</p>
          <p to="00923214898395">+44 (0) 7949 531 238</p>
          <p to="00923214898395">info@blockpia.co.uk</p>
        </div>
      </div>

      <div class="footer">
        <div class="footer-text">
          <h3>All Rights Reserved, © 2021</h3>
          <p to="#about">BLOKTOPIA</p>
          <h3>|Powe#DB0000 by </h3>
          <p to="#about">Mobitsolutions</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
