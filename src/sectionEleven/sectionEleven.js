import React from "react";
import "./sectionEleven.css";
import TokenUtility from "../Assets/TokenUtility.png";
import BlockopinIcon from "../Assets/BlockgIcon.png";
import BlockopionIcon from "../Assets/BlockopinIcon.png";
import BlockpiaWorkIcon from "../Assets/BlockpiaWorkIcon.png";
const SectionEleven = () => {
  return (
    <>
      <div className="section_eleven_whole_style">
         <h1>Token Utility</h1>
 
        <div className="section_eleven_content_style container">
          <div className="sectionEleven_icon__style">
            <img src={BlockopinIcon} alt="blockpiaicon" height="100" width="100" />
            <p>
              BLOK is the native token of Bloktopia. BLOK will be required to
              purchase or lease all real estate within Bloktopia.{" "}
            </p>
          </div>
          <div className="sectionEleven_icon__style">
            <img src={BlockopionIcon} alt="blockpiaicon" height="100" width="100"  />
            <p>
              Bloktopians will be able to purchase items from the Bloktopia
              marketplace, via a NFT mechansim. The marketplace will showcase
              items to personalise both real estate and customise avatars.
            </p>
          </div>
          <div className="sectionEleven_icon__style">
            <img
              src="https://www.bloktopia.com/wp-content/uploads/2021/07/xBLOKTOPIA-MARKETPLACE-copy-3.png.pagespeed.ic.vs7LotjUUS.webp"
              alt="" height="100" width="100" 
            />
            <p>
              BLOK is a utility token and offers holders a wide range of
              features within Bloktopia. Examples include, accessing exclusive
              events, joining pre sales and staking.{" "}
            </p>{" "}
          </div>
          <div className="sectionEleven_icon__style">
            <img src={BlockpiaWorkIcon} alt="blockpiaworkicon" height="100" width="100"  />
            <p>
              Bloktopia will work on a Governance model. Reblok NFT holders will
              form part of that Governance council. Each NFT will vote via a
              DAO. Proposals will be made to the DAO where NFT holders will vote
              with the majority vote winning.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionEleven;
