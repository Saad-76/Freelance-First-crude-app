import React from "react";
import Comp1 from "../Assets/Comp1.mp4";
import "./firstContent.css";

const FirstContent = () => {
  return (
    <>
      <div className="main_div_style">
        <div className="first_content-video_style">
          <video  width="100%" height="800" controls autoplay>
            <source src={Comp1} type="Video/mp4" />
          </video>
  
        </div>
        <div className="first_content_style">
          <h1>A Decentralised Metaverse</h1>
          <p>built & backed by</p>
          <img
            src="https://www.bloktopia.com/wp-content/uploads/2021/07/polygon-logo-inverted.svg"
            alt="img"
          />
          <h6>
            Bloktopia will provide an unprecedented VR experience for the crypto
            community, bringing users together all in one immersive and engaging
            environment.
          </h6>
        </div>
      </div>
    </>
  );
};
export default FirstContent;
