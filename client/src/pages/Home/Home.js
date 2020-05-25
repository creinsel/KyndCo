import React from "react";
import Nav from "../../Components/Nav";
import Intro from "../../Components/Intro"
import About from "../../Components/About";
import Badge from "../../Components/Badge";
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";

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
