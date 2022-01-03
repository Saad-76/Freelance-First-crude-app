import React from "react";
import EarningImage from "../Assets/EarningOpportunity.png";
import "./sectionTen.css"

const sectionTen = () => {
  return (
    <>
      <div className="sectionTen_component__style">
       <div className="sectionTen_image__style">
       <img src={EarningImage} alt="earningimage" width="700" />
         </div>
      <div className="sectionTen_content__style row container">
        <div className="col-md-4">
          <h2>BLOK</h2>
          <h3>THE NATIVE TOKEN OF BLOKTOPIA</h3>
          <span>EARNING WITH BLOK</span>
          <p>
            Bloktopians will be able to buy and sell BLOK via both Decentalized
            and Centralised exchanges. All BLOK from initial real estate
            purchases will be publicity burnt decreasing the overall supply of
            the token. BLOK will also be required to purchase items from within
            Bloktopia for example; upgrading real estate space or purchasing
            items from within the marketplace. This is what makes BLOK valuable
            and necessary for the ecosystem to operate.
          </p>
        </div>
        <div className="col-md-4">
          <h2>REBLOK</h2>
          <h3>BUY, SELL & LEASE VIRTUAL REAL ESTATE</h3>
          <span>EARNING WITH REBLOK</span>
          <p>
            {" "}
            Within Bloktopia the purchase of real estate is known as Reblok.
            Bloktopians will be able to purchase real estate following the BLOK
            token distribution event (TGE). The real estate will be a valuable
            commodity within Bloktopia allowing Bloktopians to speculate on the
            property and either resell for profit or lease for passive income
            opportunities.
          </p>{" "}
        </div>
        <div className="col-md-4">
          <h2>ADBLOK</h2>
          <h3> RECEIVE INCOME VIA ADVERTISING</h3>
          <span>EARNING WITH ADBLOK</span>
          <p>
            Within Bloktopia one of the key earning opportunities to investors
            is via advertising. Bloktopia will work with key brand partners and
            give them a unique opportunity to advertise within Bloktopia. A
            proportion of these advertising fees generated will be returned to
            Bloktopia token holders.
          </p>
        </div>
        </div>


        <div className="sectionTen_token__style container">
          <h2>TOKEN LOCK</h2>
          <p>
            Bloktopia real estate will be sold in a eight phase sale. All BLOK
            tokens used for the purchase of the BLOK real estate will be
            publicly locked reducing the supply of BLOK tokens.
          </p>
        </div>
        </div>

    </>
  );
};
export default sectionTen;
