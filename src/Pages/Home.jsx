import React from 'react'
import Banner from "../components/Banner/Banner"
import Navbar from "../components/Navbar/Navbar";
import SeactionOne from "../components/Section1/SectionOne";
import SectionTwo from "../components/Section2/Section2";
import SectionThree from "../components/Section3/Section3";
import SectionFour from "../components/Section4/Section4";
import SectionFive from "../components/Section5/Section5";
import SectionSix from "../components/Section6/Section6";
import SectionSeven from "../components/Section7/Section7";
import PerguntasFrequentes from "../components/PerguntasFrequentes/PerguntasFrequentes";
import SectionEight from "../components/Section8/Section8";
import SectionNine from "../components/Section9/Section9";
import SectionTen from "../components/Section10/Section10";
import SectionEleven from "../components/Section11/Section11";
import SectionTwelve from "../components/Section12/Section12";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
         <Navbar />
      <Banner />
      <SeactionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      {/* <SectionTwelve /> */}
      <PerguntasFrequentes />
      <Footer />
      
    </div>
  )
}

export default Home
