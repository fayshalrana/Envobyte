import React from "react";
import Hero from "../components/screen/Home/Hero";
import Services from "../components/screen/Home/Services";
import MoreDetails from "../components/screen/Home/MoreDetails";
import Portfolio from "../components/screen/Home/Portfolio";
import WorkProcess from "../components/screen/Home/WorkProcess";
import Testimonials from "../components/screen/Home/Testimonials";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <MoreDetails />
      <Portfolio />
      <WorkProcess />
      <Testimonials />
    </React.Fragment>
  );
}

export default Home;
