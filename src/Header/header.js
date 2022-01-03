import React from "react";
import logopic from "../Assets/Blocktopia-BLACK.png";
import "./Header.css";
import {BiFace} from "react-icons/bi"
import {FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiCodepen} from "react-icons/fi"
import {FaMaxcdn} from "react-icons/fa"


const Header=() =>{
    return(
<div className="header col-md-12 ">
    <div className="header-logo  col-md-6 text-center"><img src={logopic} height="50px" width="300px"/></div>
    <div className="header-icon  col-md-6 text-center">
        <p><BiFace size={35}/></p>
        <p><FiFacebook size={35}/></p>
        <p><FiTwitter size={35}/></p>
        <p><FiInstagram size={35}/></p>
        <p><FaMaxcdn size={35}/></p>
        <p><FiYoutube size={35}/></p>
        <p><FiCodepen size={35}/></p> 
        </div>
    <div className="header-link col-sm-12  text-center">
        <p  className="col-sm-2" to="https://www.facebook.com/">BLOKPAD</p>
    <p className="col-sm-2"  to="https://www.facebook.com/">JABE</p>
    <p  className="col-sm-2" to="https://www.facebook.com/">STACKING</p>
    <p className="col-sm-2"  to="https://www.facebook.com/">LIGHT</p>
    <p className="col-sm-2"  to="https://www.facebook.com">NFT'S</p>
    </div>  
    
</div>
    )
};

export default Header;