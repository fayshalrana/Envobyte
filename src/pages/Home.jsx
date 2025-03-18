import React from "react";
import Hero from "../components/screen/Home/Hero";
import Services from "../components/screen/Home/Services";
import MoreDetails from "../components/screen/Home/MoreDetails";
import Portfolio from "../components/screen/Home/Portfolio";
import WorkProcess from "../components/screen/Home/WorkProcess";
import Testimonials from "../components/screen/Home/Testimonials";
import TeamMembers from "../components/screen/Home/TeamMembers";
import FAQ from "../components/screen/Home/FAQ";
import Contact from "../components/screen/Home/Contact";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <MoreDetails />
      <Portfolio />
      <WorkProcess />
      <Testimonials />
      <TeamMembers />
      <FAQ />
      <Contact />
    </React.Fragment>
  );
}

export default Home;
