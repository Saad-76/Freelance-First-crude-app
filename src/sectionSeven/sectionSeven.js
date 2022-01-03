import React from "react";
import "./sectionSeven.css";
import Earn from "../Assets/Earn.png";

const SectionSeven = () => {
  return (
    <>
      <div className="section_saven__style col-md-12">
        <div className="seven_content_style col-md-6 ">
          <img src={Earn} alt="images" height="180" width="180" />

          <h2>Generate revenue through multiple income streams</h2>
          <p>
            Bloktopia will be a land of earning opportunities for Bloktopians.
            Following the IDO, Bloktopia real estate will be made available for
            Bloktopians to purchase. Other opportunities will consist of passive
            earning, staking and advertising.
          </p>
        </div>
        <div className="  col-md-6">
          <img
            src="https://www.bloktopia.com/wp-content/uploads/2021/09/Artboard-1-copy@1.5x-768x768.png"
            width="674"
          />
        </div>
      </div>
    </>
  );
};
export default SectionSeven;
