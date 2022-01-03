import React from "react";
import "./sectionThirteen.css"
import Investors from "../Assets/Investors.png"
const SectionThirteen=()=>{

    return(
        <>
        <div className="sectionThirteen_section__style">
            <img src={Investors} alt="investorsImage" />
        <div className="sectionThirteen_content__style">
            <div>
                <h2>lead investor</h2>
                <img src="https://www.bloktopia.com/wp-content/uploads/2021/09/logo-white-color-web-08-1.png" alt="leadInvestor" width="300px" height="300px"/></div>
            <div>
                <h2>Marketing Partner</h2>
                <img src="https://www.bloktopia.com/wp-content/uploads/2021/09/INVESTORS-BLOK10-10.png" alt="marketingpartner" width="300px" height="300px"/></div>

        </div>
        </div>

        </>
    );
}
export default SectionThirteen;