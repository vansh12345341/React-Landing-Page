import React from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import RoadMap from "./components/RoadMap/RoadMap";
import Slider from "./components/Slider/Slider";
import OurTeam from "./components/OurTeam/OurTeam";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <ScrollTop />
      <NavBar />
      <Hero />
      <Welcome />
      <RoadMap />
      <Slider />
      <OurTeam />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
