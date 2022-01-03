import React from "react";
import SectionFive from "../Assets/SectionFive.png";
import "./fiveSection.css";

const FiveSection = () => {
  return (
    <>
      <div className="fiveSection_style">
        <div className="fiveSection_image__style">
          <img src={SectionFive} alt="imagefive" height="430px" width="250px" />
        </div>
        <div className="five_content_style">
          <h1>What is the Metaverse?</h1>
          <h6>BRINGING NFT'S TO LIFE</h6>
          <p>
            The Metaverse is the bridge between physical and virtual worlds
            within the decentralised and open source virtual world.
            Cryptographic protocols will emerge for managing digital value, for
            example, digital art, real estate & advertising space. The
            facilitators that make this happen will be NFT’s on the Polygon
            Network allowing for affordable and rapid transactions.
          </p>
        </div>
      </div>
    </>
  );
};
export default FiveSection;
