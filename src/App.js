import React from "react";
import FirstContent from "./FirstSection/firstContent";
import FiveSection from "./FiveSection/fiveSection";
import Header from "./Header/header";
import SecondSection from "./SecondSection/secondSection";
import SectionSix from "./sectionSix/sectionSix";
import Video from "./Video/video";
import Footer from "./Footer/footer";
import SectionSeven from "./sectionSeven/sectionSeven";
import SectionEight from "./sectionEight/sectionEight"
import SectionNine from "./sectionNine/sectionNine"
import SectionTen from "./sectionTen/sectionTen";
import SectionEleven from "./sectionEleven/sectionEleven";
import SectionTwelve from "./sectionTwelve/sectionTwelve";
import SectionThirteen from "./sectionThirteen/sectionThirteen";
import SectionFourteen from "./sectionFourteen/sectionFourteen";
import SectionFifteen from "./sectionFifteen/sectionFifteen";

function App() {
  return (
   <>
   <Header/>
  {/* <Video/> */}
  <FirstContent/>
  <SecondSection/>
  <FiveSection/>
  <SectionSix/>
  <SectionSeven/>
  <SectionEight/>
  <SectionNine/>
  <SectionTen/>
  <SectionEleven/>
  <SectionTwelve/>
  <SectionThirteen/>
  <SectionFourteen/>
  <SectionFifteen/>
<Footer/>
   </>
  );
}

export default App;
