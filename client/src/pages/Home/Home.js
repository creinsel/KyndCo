import React from "react";
import Nav from "../../Components/nav";
import Intro from "../../Components/intro";
import About from "../../Components/about";
import Badge from "../../Components/badge";
import Team from "../../Components/team";
import Footer from "../../Components/footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <Badge />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
