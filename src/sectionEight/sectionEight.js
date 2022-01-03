import React from "react";
import "./sectionEight.css";
import Play from "../Assets/Play.png";

const SectionSeven = () => {
  return (
    <>
      <div className="sectionEight_whole__style col-md-12 ">
        <div className="col-md-6">
          <img
            src=" https://www.bloktopia.com/wp-content/uploads/2021/09/Artboard-1-copy-3@1.5x-768x768.png"
            alt="link" width="690"
          />
        </div>
        <div className=" sectionEight_content__style col-md-6">
          <div className="sectionEight_content__style_img">          <img src={Play} alt="playimage" height="180" width="200" />
</div>
          <h2>Relax, socialise, have fun and compete</h2>
          <p>
            Users can come and play games, entertain friends and network through
            a truly immersive, first-person perspective of a virtual reality
            world.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default SectionSeven;
