import React from "react";
import Cards from "../../Cards";
import HeroSection from "../../HeroSection";
import Footer from "../../Footer"
import {Wrapper} from "./styled"

function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <Cards />
      <Footer />
    </Wrapper>
  );
}

export default Home;
