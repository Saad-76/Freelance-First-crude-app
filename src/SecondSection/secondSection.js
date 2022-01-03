import React from "react";
import BLOKTOPIAImage from "../Assets/BLOKTOPIA-3.png"
import "./secondSection.css"

const SecondSection = () => {
  return (
    <>
      <div className="second_section__style ">
        <div className="second_content_style">
          <h1> INTRODUCING BLOCKPIA</h1>
          <h2>THE HOME OF CRYPTO</h2>
          <p>
            Bloktopia is a Skyscraper made up of 21 levels to pay recognition to
            21 million Bitcoin. Token holders will be known as Bloktopians. It
            will act as a central hub and welcome all levels of crypto
            experience. For the first time ever, users will have access to
            crypto information and immersive content all in one place.
            Bloktopians will be able to earn revenue through real estate
            ownership, advertising revenue, play games, build networks and much
            more. By using the world’s most advanced real time 3D Creation
            Engine, Bloktopia will leverage this technology to create stunning
            visualisations and user experience.{" "}
          </p>
        </div>
        <div> 
            <img src={BLOKTOPIAImage} alt="bLOKtOPiMAGE" height="844px" width="750px"/>
        </div>
      </div>
    </>
  );
};
export default SecondSection;
