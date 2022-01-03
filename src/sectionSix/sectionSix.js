import React from "react";
import "./sectionSix.css";
import homeLogo from "../Assets/homeLogo.png";

const SectionSix = () => {
  return (
    <>
      <div className="six_section__style col-md-12">
        <div className="col-md-6">
          <img
            src="https://www.bloktopia.com/wp-content/uploads/2021/09/xArtboard-1-copy-6,401.5x-768x768.png.pagespeed.ic.0CXih47Gt1.webp"
            alt="imagestyle" width="688" 
          />
        </div>
        <div className="six_content_style col-md-6">
          <img src={homeLogo} alt="homeLogo" height="180" width="180"/>
          <h2>What is the Metaverse?</h2>
          <p>
            The world of crypto can be an extremely difficult place to navigate
            your way around. With Youtube, Telegram and Crypto Twitter
            information is very disjointed.
          </p>
          <p>
            Bloktopia will overcome this issue by positioning itself as a
            central hub, where users can come and learn in an open and friendly
            environment.
          </p>
        </div>
      </div>
    </>
  );
};
export default SectionSix;
